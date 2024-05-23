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



AFRAME.registerComponent('detect-pose', {
  schema: {
    hand: { default: 'left' },
    fingerTipJoint: { default: 'index-finger-tip' },
    distancesToWrist: { default: [] },
    poses: { default: [] },
  },

  init: function () {
    this.data.poses = []

    console.log('test')

    this.el.addEventListener("save-pose", function (event) {
      this.savePose('test')
      console.log(poses)
    });
  },

  update: function () {
  },

  onModelLoaded: function () {
  },

  tick: function () {
    var jointPose = new THREE.Matrix4();

    var controller = this.el.components['hand-tracking-controls'];
    // console.log(controller)
    if (!controller) { return; }
    if (controller.indexTipPosition.y > 0.1) {
    }

    var trackedController = this.el.components['tracked-controls'];
    if (!trackedController) { return; }
    const hand = trackedController.controller.hand

    const position = new THREE.Vector3();

    var WRIST_INDEX = 0;

    // Extraer las posiciones de las articulaciones
    const currentJointPositions = [];
    for (let i = 0; i < JOINTS.length; i++) {
      const index = i * 16;
      // Obtener la posición de la articulación utilizando THREE.js
      position.setFromMatrixPosition(jointPose.fromArray(controller.jointPoses, index));
      // Guardar la posición en el array
      currentJointPositions.push([position.x, position.y, position.z]);
    }

    // distancia con la muñeca
    const wristPosition = new THREE.Vector3();
    wristPosition.setFromMatrixPosition(jointPose.fromArray(controller.jointPoses, WRIST_INDEX * 16));

    var currentPosition = new THREE.Vector3();
    const distancesToWrist = []

    for (let i = 0; i < JOINTS.length; i++) {
      currentPosition.setFromMatrixPosition(jointPose.fromArray(controller.jointPoses, i * 16));
      
      var distance = currentPosition.distanceTo(wristPosition);

      distancesToWrist.push(distance);
    }
    this.data.distancesToWrist = distancesToWrist

    /////////// test position

    const predefinedDistances = [0, 0.05003999670769802, 0.08199392112682366, 0.11350772040970421, 0.1358602836697121, 0.04323191092500442, 0.09920182653629199, 0.1304798492671457, 0.13458083133266602, 0.13534030366510408, 0.0371214371177703, 0.09602604425886353, 0.1384702365952246, 0.16233918017128773, 0.18422542772295086, 0.03854864248225906, 0.09099998462973066, 0.12941405847727738, 0.15339170383067327, 0.1752855050132736, 0.04202382139108134, 0.08663143689638457, 0.11783891102334616, 0.13697082496889712, 0.15789242148065816];


    const margin = 0.01;
    const isSimilar = this.compareDistances(this.data.distancesToWrist, predefinedDistances, margin);

    if (isSimilar) {
      console.log("La pose actual es similar a la pose predefinida.");
    } else {
      // console.log("La pose actual es diferente de la pose predefinida.");
    }

  },

  savePose(name) {
    // actual position
    var newPose = {
      name: name,
      distances: this.data.distancesToWrist,
    }
    this.data.poses.push(asdf)
  },

  checkPose() {

  },

  compareDistances(distances1, distances2, margin) {
    if (distances1.length !== distances2.length) {
      return false;
    }
  
    for (let i = 0; i < distances1.length; i++) {
      const diff = Math.abs(distances1[i] - distances2[i]);
      if (diff > margin) {
        return false;
      }
    }

    return true;
  },


  remove: function () {
  }
});