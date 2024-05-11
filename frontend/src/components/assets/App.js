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

