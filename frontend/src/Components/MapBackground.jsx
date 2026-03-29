import "../Styles/Components/MapBackground.css";
import mapUrl from "../assets/World_Map.svg";
import { useEffect } from "react";

const MapBackground = () => {
  useEffect(() => {
    const map = document.querySelector(".map-svg-layer");
    if (map) {
      setTimeout(() => {
        map.classList.add("map-visible");
      }, 200);
    }
  }, []);

  return (
    <div className="map-wrapper">

      {/* MAP */}
      <div className="map-svg-layer">
        <img src={mapUrl} alt="map" />
      </div>

      {/* OVERLAYS */}
      <div className="map-overlay"></div>
      <div className="map-overlay-bottom"></div>

      {/* GLOWS */}
      <div className="map-glow orange-glow"></div>
      <div className="map-glow blue-glow"></div>

    </div>
  );
};

export default MapBackground;