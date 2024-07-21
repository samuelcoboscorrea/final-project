AFRAME.registerComponent('magic-wand', {
  schema: {},
  
  init: function () {
    // Create the wand entity
    const wand = document.createElement('a-entity');
    
    // Add grabbable component
    wand.setAttribute('grabbable', '');
    
    // Add raycaster component
    wand.setAttribute('raycaster', {
      showLine: true,
      objects: '[raycastable]',  // Assuming you add raycastable class to objects you want to interact with
      far: 10,
      interval: 500
    });

    // Add visual representation (e.g., a simple cylinder)
    wand.setAttribute('geometry', {
      primitive: 'cylinder',
      height: 0.5,
      radius: 0.05
    });
    
    // Add some material to make it look like a wand
    wand.setAttribute('material', 'color: #000');

    // Set initial position (this will be updated by hands-tracking-controls)
    wand.setAttribute('position', '0 1.5 -0.5');

    // Append the wand entity to the main entity
    this.el.appendChild(wand);
  }
});