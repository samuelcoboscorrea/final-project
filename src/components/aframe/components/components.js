// native AFRAME components

AFRAME.registerComponent('hello-world', {
  schema: {},
  multiple: false,
  init: function () {
    console.log('componente iniciado correctamente')
  },
  update: function (oldData) {
    console.log(oldData)
  },
  remove: function () { },
  // tick: function (t) { },
  pause: function () { },
  play: function () { },
  events: {
  }
})

AFRAME.registerComponent('pressable', {
  schema: {
    pressDistance: { default: 0.06 },
    animationFinished: { type: 'boolean' }
  },

  update: function (oldData) {
    console.log(oldData)
  },

  init: function () {
    this.worldPosition = new THREE.Vector3();
    this.handEls = document.querySelectorAll('[hand-tracking-controls]');
    this.pressed = false;
  },

  tick: function () {
    var handEls = this.handEls;
    var handEl;
    var distance;
    for (var i = 0; i < handEls.length; i++) {
      handEl = handEls[i];
      distance = this.calculateFingerDistance(handEl.components['hand-tracking-controls'].indexTipPosition);
      if (distance < this.data.pressDistance) {
        if (!this.pressed && this.data.animationFinished) { this.el.emit('pressedstarted'); }
        this.pressed = true;
        return;
      }
    }
    if (this.pressed) { this.el.emit('pressedended'); }
    this.pressed = false;
  },

  calculateFingerDistance: function (fingerPosition) {
    var el = this.el;
    var worldPosition = this.worldPosition;

    worldPosition.copy(el.object3D.position);
    el.object3D.parent.updateMatrixWorld();
    el.object3D.parent.localToWorld(worldPosition);

    return worldPosition.distanceTo(fingerPosition);
  }
})