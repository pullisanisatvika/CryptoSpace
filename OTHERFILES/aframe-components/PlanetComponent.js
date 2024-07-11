// PlanetComponent.js

AFRAME.registerComponent('planet', {
  schema: {
    radius: { type: 'number', default: 1 },
    color: { type: 'color', default: '#ffffff' },
    texture: { type: 'tring', default: '' },
    planetId: { type: 'number', default: 0 }
  },

  init: function() {
    this.el.addEventListener('click', () => {
      // Handle planet click event
      console.log(`Planet ${this.data.planetId} clicked!`);
    });
  },

  update: function() {
    const radius = this.data.radius;
    const color = this.data.color;
    const texture = this.data.texture;

    // Create planet mesh
    const geometry = new THREE.SphereGeometry(radius, 60, 60);
    const material = new THREE.MeshBasicMaterial({ color, map: texture });
    const mesh = new THREE.Mesh(geometry, material);

    // Add mesh to scene
    this.el.setObject3D('mesh', mesh);
  }
});
