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
    // click: function (evt) { }
  }
})