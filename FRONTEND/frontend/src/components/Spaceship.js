import React from 'react';
import { Entity, useFrame } from 'aframe-react';

const Spaceship = ({ spaceshipData, onTrade }) => {
  const { name, cargo, engine, scanner } = spaceshipData;

  useFrame(() => {
    // Update the spaceship's position and rotation based on its engine
    if (engine === 'fast') {
      // Move the spaceship quickly
    } else if (engine === 'slow') {
      // Move the spaceship slowly
    }
  });

  const handleTrade = (planetId, amount) => {
    onTrade(planetId, amount);
  };

  return (
    <Entity
      geometry="primitive: box; width: 2; height: 2; depth: 2"
      material="color: #333; opacity: 0.5"
      position={[0, 0, -5]}
    >
      <a-text value={name} align="center" />
      <a-text value={`Cargo: ${cargo}`} align="center" />
      <a-text value={`Engine: ${engine}`} align="center" />
      <a-text value={`Scanner: ${scanner}`} align="center" />
      <a-button value="Trade" onClick={() => handleTrade('planet-1', 10)} />
    </Entity>
  );
};

export default Spaceship;
