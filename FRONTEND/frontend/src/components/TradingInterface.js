import React, { useState } from 'eact';
import { Entity, useFrame } from 'aframe-react';

const TradingInterface = ({ planetData, spaceshipData, onTrade }) => {
  const [amount, setAmount] = useState(0);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePlanetSelect = (planetId) => {
    setSelectedPlanet(planetId);
  };

  const handleTrade = () => {
    if (selectedPlanet && amount > 0) {
      onTrade(selectedPlanet, amount);
      setAmount(0);
      setSelectedPlanet(null);
    }
  };

  return (
    <Entity
      geometry="primitive: plane; width: 2; height: 2"
      material="color: #fff; opacity: 0.5"
      position={[0, 0, -5]}
    >
      <a-text value="Trading Interface" align="center" />
      <a-text value={`Planet: ${selectedPlanet? planetData[selectedPlanet].name : 'None'}`} align="center" />
      <a-input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Amount"
      />
      <a-button value="Trade" onClick={handleTrade} />
      <a-entity layout="type: grid; columns: 3">
        {Object.keys(planetData).map((planetId) => (
          <a-button
            key={planetId}
            value={planetData[planetId].name}
            onClick={() => handlePlanetSelect(planetId)}
          />
        ))}
      </a-entity>
    </Entity>
  );
};

export default TradingInterface;
