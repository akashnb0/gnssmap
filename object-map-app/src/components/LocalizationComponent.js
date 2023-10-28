// src/components/MapComponent.js (unchanged)

// src/components/LocalizationComponent.js
import React from 'react';

const LocalizationComponent = ({ object, localizeObject, x, y, z, setX, setY, setZ }) => {
  return (
    <div>
      <h2>Localize an Object</h2>
      <div>
        <label>
          X:
          <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Y:
          <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Z:
          <input type="number" value={z} onChange={(e) => setZ(e.target.value)} />
        </label>
      </div>
      <button onClick={localizeObject}>Localize</button>
      <p>Object: {object.name}</p>
      <p>Coordinates (x, y, z): {object.x}, {object.y}, {object.z}</p>
    </div>
  );
};

export default LocalizationComponent;
