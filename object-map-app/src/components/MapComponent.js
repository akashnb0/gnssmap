
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ markers }) => {
  const [center, setCenter] = useState([0, 0]);

  useEffect(() => {
    // Calculate the center based on the markers (x, y)
    if (markers.length > 0) {
      const totalX = markers.reduce((acc, marker) => acc + marker.x, 0);
      const totalY = markers.reduce((acc, marker) => acc + marker.y, 0);
      setCenter([totalX / markers.length, totalY / markers.length]);
    }
  }, [markers]);

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.x, marker.y]}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
