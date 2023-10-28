// src/App.js
import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import LocalizationComponent from './components/LocalizationComponent';

function App() {
  const [markers, setMarkers] = useState([]);
   
  const [localizedObject, setLocalizedObject] = useState({ name: '', x: 0, y: 0, z: 0 });
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const localizeObject = () => {
    // Update the localized object based on user input (x, y, z)
    const localizedObjectName = 'Localized Object';

    setLocalizedObject({ name: localizedObjectName, x, y, z });

    // Update the markers array (for the map) with the localized object
    setMarkers([{ name: localizedObjectName, x, y }]);
  };

  return (
    <div>
      <h1>Object Localization Map</h1>
      <MapComponent markers={markers} />
      <LocalizationComponent
        object={localizedObject}
        localizeObject={localizeObject}
        x={x}
        y={y}
        z={z}
        setX={setX}
        setY={setY}
        setZ={setZ}
      />
    </div>
  );
}

export default App;
