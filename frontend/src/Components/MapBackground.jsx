import "../Styles/Components/MapBackground.css"
import mapUrl from "../assets/World_Map.svg"

const MapBackground = () => {
  return (
    <div className="map-wrapper">
      {/* 1. The Dotted Map */}
     <div className="map-wrapper">
  <div className="map-svg-layer">
    <img src={mapUrl} alt="map" />
  </div>

  {/* 🔥 EDGE BLEND OVERLAY */}
  <div className="map-overlay"></div>

  <div className="map-glow orange-glow"></div>
              <div className="map-glow blue-glow"></div>
              
                <div className="map-overlay"></div>
</div>
    </div>
  );
};

export default MapBackground;