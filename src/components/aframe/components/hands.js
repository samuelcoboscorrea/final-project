var JOINTS = [
  'wrist',
  'thumb-metacarpal',
  'thumb-phalanx-proximal',
  'thumb-phalanx-distal',
  'thumb-tip',
  'index-finger-metacarpal',
  'index-finger-phalanx-proximal',
  'index-finger-phalanx-intermediate',
  'index-finger-phalanx-distal',
  'index-finger-tip',
  'middle-finger-metacarpal',
  'middle-finger-phalanx-proximal',
  'middle-finger-phalanx-intermediate',
  'middle-finger-phalanx-distal',
  'middle-finger-tip',
  'ring-finger-metacarpal',
  'ring-finger-phalanx-proximal',
  'ring-finger-phalanx-intermediate',
  'ring-finger-phalanx-distal',
  'ring-finger-tip',
  'pinky-finger-metacarpal',
  'pinky-finger-phalanx-proximal',
  'pinky-finger-phalanx-intermediate',
  'pinky-finger-phalanx-distal',
  'pinky-finger-tip'
];

AFRAME.registerComponent('hand-down-detector', {
  schema: {
    hand: { default: 'left' }, // Mano a detectar (derecha o izquierda)
    fingerTipJoint: { default: 'index-finger-tip' } // Articulación de la punta del dedo a utilizar
  },

  init: function () {
  },

  update: function () {
  },

  onModelLoaded: function () {
  },

  tick: function () {
    // Lógica para determinar si la mano está boca arriba.
    // Por ejemplo, podrías verificar si el dedo índice está apuntando hacia arriba.

    var controller = this.el.components['hand-tracking-controls'];
    // console.log(controller)
    if (!controller) { return; }
    if (controller.indexTipPosition.y > 0.1) {
      // console.log('la mano esta boca arriba');
    }

    var WRIST_INDEX = 0;
    var THUMB_TIP_INDEX = 4;
    var INDEX_TIP_INDEX = 9;

    var thumbTipPosition = new THREE.Vector3();
    var jointPose = new THREE.Matrix4();
    var indexTipPosition = new THREE.Vector3();
    var wristTipPosition = new THREE.Vector3();
    var wristRotation = new THREE.Quaternion();

    wristRotation.setFromRotationMatrix(jointPose.fromArray(controller.jointPoses, WRIST_INDEX * 16));
    thumbTipPosition.setFromMatrixPosition(jointPose.fromArray(controller.jointPoses, THUMB_TIP_INDEX * 16));
    indexTipPosition.setFromMatrixPosition(jointPose.fromArray(controller.jointPoses, INDEX_TIP_INDEX * 16));

    var jointRadi = controller.jointRadii[WRIST_INDEX]

    

    if (-0.02 <= wristRotation.y <= 0.02) {
      this.el.emit('handdown', controller.indexTipPosition);
    } else if (wristRotation.y > 0.08) {
      console.log(wristRotation.y)
      console.log(controller)
      console.log(controller.skinnedMesh.parent.rotation)
      console.log(controller.skinnedMesh.parent.quaternion)
      console.log(jointRadi)
      this.el.emit('handup', controller.indexTipPosition);
    } else {
      this.el.emit('handdown', controller.indexTipPosition);
    }
  },


  remove: function () {
  }
});

AFRAME.registerComponent('hand-positions', {
  schema: {
    // Esquema del componente, si es necesario
  },

  init: function () {
    // Inicialización del componente, si es necesario
  },

  tick: function () {
    var self = this;
    var joints = ['wrist', 'thumb-metacarpal', 'thumb-phalanx-proximal', 'thumb-phalanx-distal', 'thumb-tip', 'index-finger-metacarpal', 'index-finger-phalanx-proximal', 'index-finger-phalanx-intermediate', 'index-finger-phalanx-distal', 'index-finger-tip', 'middle-finger-metacarpal', 'middle-finger-phalanx-proximal', 'middle-finger-phalanx-intermediate', 'middle-finger-phalanx-distal', 'middle-finger-tip', 'ring-finger-metacarpal', 'ring-finger-phalanx-proximal', 'ring-finger-phalanx-intermediate', 'ring-finger-phalanx-distal', 'ring-finger-tip', 'pinky-finger-metacarpal', 'pinky-finger-phalanx-proximal', 'pinky-finger-phalanx-intermediate', 'pinky-finger-phalanx-distal', 'pinky-finger-tip'];

    // Iterar sobre cada articulación
    joints.forEach(function (jointName) {
      // Obtener la posición de la articulación
      var jointPosition = self.getJointPosition(jointName);

      // Crear o actualizar el texto correspondiente a la posición de la articulación
      self.updateText(jointName, jointPosition);
    });
  },

  getJointPosition: function (jointName) {
    // Lógica para obtener la posición de la articulación específica
    // Debes implementar esta función para obtener la posición de cada articulación
    // Puedes usar XRHand, controller, o cualquier otra fuente de datos que tengas disponible
    // y devolver un objeto { x, y, z } con las coordenadas de la articulación.
  },

  updateText: function (jointName, jointPosition) {
    // Lógica para crear o actualizar el texto correspondiente a la posición de la articulación
    // Puedes usar `document.createElement('a-text')` para crear nuevos elementos de texto
    // y configurar su posición y atributos de acuerdo a las coordenadas de la articulación
    // También puedes actualizar los textos existentes si ya han sido creados en el `init()`
    // o en algún otro lugar de tu lógica.
  }
});