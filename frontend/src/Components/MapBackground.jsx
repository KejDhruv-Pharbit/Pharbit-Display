import "../Styles/Components/MapBackground.css"
import mapUrl from "../assets/World_Map.svg"

const MapBackground = () => {
  return (
    <div className="map-wrapper">
      {/* 1. The Dotted Map */}
      <div 
        className="map-svg-layer" 
        style={{ backgroundImage: `url(${mapUrl})` }}
      ></div>

      {/* 2. The Orange Glow (Left) */}
      <div className="map-glow orange-glow"></div>

      {/* 3. The Blue/Cyan Glow (Right) */}
      <div className="map-glow blue-glow"></div>
    </div>
  );
};

export default MapBackground;