import React, { useState, useEffect } from 'react';
import { Scene, Entity } from 'aframe-react';
import Spaceship from './Spaceship';
import TradingInterface from './TradingInterface';

const App = () => {
  const [spaceshipData, setSpaceshipData] = useState({
    name: 'My Spaceship',
    cargo: 100,
    engine: 'fast',
    scanner: 'basic',
  });

  const [planetData, setPlanetData] = useState({
    'planet-1': { name: 'Planet 1', price: 10 },
    'planet-2': { name: 'Planet 2', price: 20 },
    'planet-3': { name: 'Planet 3', price: 30 },
  });

  const handleTrade = (planetId, amount) => {
    // Update the spaceship's cargo and planet's price
    setSpaceshipData((prevData) => ({ ...prevData, cargo: prevData.cargo - amount }));
    setPlanetData((prevData) => ({ ...prevData, [planetId]: { ...prevData[planetId], price: prevData[planetId].price + amount } }));
  };

  useEffect(() => {
    // Initialize the game state
    setSpaceshipData({ ...spaceshipData, cargo: 100 });
    setPlanetData({ ...planetData, 'planet-1': { ...planetData['planet-1'], price: 10 } });
  }, []);

  return (
    <Scene>
      <Entity
        geometry="primitive: sphere; radius: 100"
        material="color: #333; opacity: 0.5"
        position={[0, 0, -5]}
      />
      <Spaceship spaceshipData={spaceshipData} onTrade={handleTrade} />
      <TradingInterface planetData={planetData} spaceshipData={spaceshipData} onTrade={handleTrade} />
    </Scene>
  );
};

export default App;
