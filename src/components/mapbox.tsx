import React, { useEffect, useRef, useState } from "react";
// import ReactMapGL, { ViewState } from "react-map-gl";
import ReactMapGL from "react-map-gl";

function MapBoxComponent() {
  const [viewport, setViewport] = useState({
    latitude: -23.558161,
    longitude: -46.66156,
    zoom: 18,
  });

  const handleViewportChange = (newViewport: typeof viewport) => {
    setViewport(newViewport);
  };

  return (
    <ReactMapGL
      width="100%"
      height="100vh"
      onViewportChange={handleViewportChange}
      mapboxAccessToken="pk.eyJ1Ijoic2l0YXZhcmVzIiwiYSI6ImNsbmpjcHJnbTB0OXQyam83MGl5MmFjZGkifQ.1Nm5ZlbXimV_j9Vb4f4FPg"
      mapStyle="mapbox://styles/mapbox/streets-v11"
    />
  );
}

export default MapBoxComponent;
