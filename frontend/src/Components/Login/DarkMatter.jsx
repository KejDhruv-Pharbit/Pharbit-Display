import { useEffect, useRef } from "react";

function DarkMatterGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const NUM = 260, STREAMS = 18;
    let W, H, CX, CY, R, particles = [], streams = [], time = 0;
    let globalAngle = 0, mouse = { x: 0, y: 0 };
    let animId;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      CX = W / 2; CY = H / 2;
      R = Math.min(W, H) * 0.3;
      initParticles();
    }

    function spherePoint(u, v) {
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      return { x: Math.sin(phi)*Math.cos(theta), y: Math.sin(phi)*Math.sin(theta), z: Math.cos(phi) };
    }

    function initParticles() {
      particles = Array.from({ length: NUM }, () => {
        const p = spherePoint(Math.random(), Math.random());
        const speed = 0.0008 + Math.random() * 0.0015;
        return { ...p, ox: p.x, oy: p.y, oz: p.z, angle: Math.random()*Math.PI*2,
          speed: Math.random()<0.5 ? speed : -speed, axis: Math.random()<0.5 ? 'y' : 'z',
          size: 1+Math.random()*1.6, brightness: 0.3+Math.random()*0.7,
          hue: 20 + Math.random() * 20, pulse: Math.random()*Math.PI*2,
          pulseSpeed: 0.02+Math.random()*0.04 };
      });
      streams = Array.from({ length: STREAMS }, (_, i) => ({
        angle: (i/STREAMS)*Math.PI*2, radius: R*(0.15+Math.random()*0.55),
        speed: 0.004+Math.random()*0.006, width: 1+Math.random()*1.5,
        alpha: 0.06+Math.random()*0.18, offset: Math.random()*Math.PI*2,
        length: 0.3+Math.random()*0.5, ccw: Math.random()<0.5
      }));
    }

    function rotateY(x, z, a) { return { x: x*Math.cos(a)-z*Math.sin(a), z: x*Math.sin(a)+z*Math.cos(a) }; }
    function rotateX(y, z, a) { return { y: y*Math.cos(a)-z*Math.sin(a), z: y*Math.sin(a)+z*Math.cos(a) }; }

    function frame() {
      animId = requestAnimationFrame(frame);
      time++; 
      const breathe = Math.sin(time * 0.012) * 0.5 + 0.5;
      globalAngle += 0.003 + mouse.x * 0.002;
      const tiltAngle = mouse.y * 0.15;
      ctx.clearRect(0, 0, W, H);

      // Globe glow
      const grd = ctx.createRadialGradient(CX, CY, R*0.05, CX, CY, R*1.2);
      grd.addColorStop(0, 'rgba(255,140,0,0.18)');
      grd.addColorStop(0.4, 'rgba(180,80,0,0.09)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(CX, CY, R*1.2, 0, Math.PI*2);
      ctx.fillStyle = grd; ctx.fill();

      // Streams
      for (const s of streams) {
        const a = s.angle + (s.ccw ? -1 : 1) * s.speed * time + s.offset;
        const endA = a + s.length*Math.PI*2*(s.ccw ? -1 : 1);
        ctx.beginPath(); ctx.arc(CX, CY, s.radius, a, endA, s.ccw);
        const sg = ctx.createLinearGradient(CX+Math.cos(a)*s.radius, CY+Math.sin(a)*s.radius,
          CX+Math.cos(endA)*s.radius, CY+Math.sin(endA)*s.radius);
        sg.addColorStop(0,'rgba(255,140,0,0)'); sg.addColorStop(0.4,`rgba(255,165,0,${s.alpha})`);
        sg.addColorStop(1,'rgba(255,140,0,0)');
        ctx.strokeStyle = sg; ctx.lineWidth = s.width; ctx.stroke();
      }

      // Particles (depth-sorted)
      particles.map(p => {
        p.angle += p.speed; p.pulse += p.pulseSpeed;
        let x = p.ox, y = p.oy, z = p.oz;
        if (p.axis === 'y') { const r = rotateY(x, z, p.angle+globalAngle); x=r.x; z=r.z; }
        else { const r = rotateX(y, z, p.angle+globalAngle); y=r.y; z=r.z; }
        const t = rotateX(y, z, tiltAngle); y=t.y; z=t.z;
        return { p, screenX: CX+x*R, screenY: CY+y*R, depth: (z+1)/2, z };
      }).sort((a,b)=>a.z-b.z).forEach(({ p, screenX, screenY, depth }) => {
        const pulse = Math.sin(p.pulse)*0.5+0.5;
        const size = p.size*(0.7+depth*0.6)*(1+pulse*0.4);
        const alpha = (0.2+depth*0.7)*p.brightness*(0.7+pulse*0.3);
        ctx.beginPath(); ctx.arc(screenX, screenY, size, 0, Math.PI*2);
        ctx.fillStyle = `hsla(${25 + pulse*5},95%,${55+depth*25}%,${alpha})`; ctx.fill();
        if (depth > 0.7 && size > 1.5) {
          ctx.beginPath(); ctx.arc(screenX, screenY, size*2.5, 0, Math.PI*2);
          ctx.fillStyle = `hsla(30,90%,70%,${alpha*0.12})`; ctx.fill();
        }
      });

      // Core pulse
      const cg = ctx.createRadialGradient(CX, CY, 0, CX, CY, R*0.18*(1+breathe*0.1));
      cg.addColorStop(0, `rgba(255,180,80,${0.5+breathe*0.3})`);
      cg.addColorStop(0.3, `rgba(255,140,0,0.25)`);
      cg.addColorStop(1, 'rgba(120,60,0,0)');
      ctx.beginPath(); ctx.arc(CX, CY, R*0.18*(1+breathe*0.1), 0, Math.PI*2);
      ctx.fillStyle = cg; ctx.fill();

      // Rim vignette
      const rg = ctx.createRadialGradient(CX, CY, R*0.7, CX, CY, R*1.15);
      rg.addColorStop(0, 'rgba(0,0,0,0)'); rg.addColorStop(0.6, `rgba(10,5,30,0.5)`);
      rg.addColorStop(1, 'rgba(5,2,15,0.85)');
      ctx.beginPath(); ctx.arc(CX, CY, R*1.15, 0, Math.PI*2);
      ctx.fillStyle = rg; ctx.fill();
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left - CX) / R;
      mouse.y = (e.clientY - rect.top - CY) / R;
    };

    canvas.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);
    resize();
    frame();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />;
}


export default DarkMatterGlobe