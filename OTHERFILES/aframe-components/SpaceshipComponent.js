// SpaceshipComponent.js
AFRAME.registerComponent('spaceship', {
  schema: {
    model: { type: 'string' },
    color: { type: 'color', default: '#333' },
    speed: { type: 'number', default: 0.1 }
  },

  init: function() {
    // Load the spaceship model
    this.el.setAttribute('gltf-model', this.data.model);

    // Set the spaceship color
    this.el.setAttribute('material', 'color', this.data.color);
  },

  tick: function() {
    // Move the spaceship forward
    this.el.object3D.position.z += this.data.speed;
  }
});
