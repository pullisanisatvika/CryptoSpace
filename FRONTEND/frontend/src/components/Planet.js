import React from 'eact';
import { Entity, useFrame } from 'aframe-react';

const Planet = ({ planetData }) => {
  const { name, price, trend } = planetData;

  useFrame(() => {
    // Update the planet's position and rotation based on its trend
    if (trend === 'up') {
      // Move the planet upwards
    } else if (trend === 'down') {
      // Move the planet downwards
    }
  });

  return (
    <Entity
      geometry="primitive: sphere; radius: 1"
      material="color: #fff; opacity: 0.5"
      position={[0, 0, -5]}
    >
      <a-text value={name} align="center" />
      <a-text value={`Price: ${price}`} align="center" />
    </Entity>
  );
};

export default Planet;
