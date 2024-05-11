import 'aframe';

// Create the A-Frame scene
const scene = new AEntity({
  vrMode: 'enabled'
});

// (Optional) Add a sky element for the background
const sky = new AEntity({
  primitive: 'a-sky',
  color: '#ecf0f1'  // Light blue sky color
});
scene.appendChild(sky);

// (Optional) Add basic lighting
const light = new AEntity({
  primitive: 'a-light',
  type: 'directional',
  color: '#fff',
  intensity: 0.8,
  position: '-1 2 1'  // Adjust light position as needed
});
scene.appendChild(light);

// Attach the scene to the document body
document.body.appendChild(scene);

// Create a UI panel entity
const uiPanel = new AEntity({
  primitive: 'a-plane',
  position: '1 1 -1',
  width: '2',
  height: '1',
  color: 'gray',
  opacity: 0.8
});

scene.appendChild(uiPanel);

// Add text entities to display information
const cryptoText = new AEntity({
  primitive: 'a-text',
  value: 'Cryptocurrency Holdings: 0',
  color: 'black',
  align: 'center',
  position: '0 0.2 0',
  font: 'arial'
});

uiPanel.appendChild(cryptoText);
// ... (similar code for additional text displays)
const buyButton = new AEntity({
  primitive: 'a-button',
  color: 'green',
  text: 'Buy',
  width: 0.5,
  height: 0.2,
  position: '-0.5 -0.2 0',
  events: {
    click: function () {
      const selectedCrypto = prompt("Enter cryptocurrency (bitcoin/ethereum):");
      
      if (selectedCrypto && cryptocurrencies[selectedCrypto]) {
        // Handle buying process (explained later)
      } else {
        alert("Invalid cryptocurrency!");
      }
    }
  }
});

uiPanel.appendChild(buyButton);


