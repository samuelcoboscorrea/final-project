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
    actualPose: { default: null }
  },

  init: function () {
    this.el.sceneEl.addEventListener('save-pose', () => this.savePose('test'))

     this.poseTextEl = document.createElement('a-text');
     this.poseTextEl.setAttribute('position', '0 2 -2');
     this.poseTextEl.setAttribute('value', 'text');
     this.el.sceneEl.appendChild(this.poseTextEl);
  },

  update: function () {
    console.log(this.data.poses)
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
    // console.log(this.data.distancetos)

    this.checkPose()

  },

  savePose(name) {
    // actual position
    console.log('test')
    var newPose = {
      name: name + this.data.poses.length.toString(),
      distances: this.data.distancesToWrist,
    }
    this.data.poses.push(newPose)
    console.log(this.data.poses)

    this.createElementScene(newPose)
  },

  createElementScene (newPose) {
    // Crear un nuevo elemento para la lista de poses
    let poseListEl = document.querySelector('#pose-list');
    if (!poseListEl) {
      poseListEl = document.createElement('a-entity');
      poseListEl.setAttribute('id', 'pose-list');
      this.el.sceneEl.appendChild(poseListEl);
    }

    // Crear un nuevo elemento para la nueva pose
    const poseEl = document.createElement('a-text');
    poseEl.setAttribute('value', `Pose: ${newPose.name}`);
    poseEl.setAttribute('position', `0 ${1 + (this.data.poses.length * 0.5)} -0.3`);

    // Agregar el nuevo elemento a la lista de poses
    poseListEl.appendChild(poseEl);
  },

  checkPose() {
    console.log('entra')
    console.log(this.data.poses)
    for (let i = 0; i < this.data.poses.length; i++) {
      var poseDistance = this.data.poses[i].distances

      const margin = 0.01;
      console.log(this.data.distancesToWrist)
      console.log(poseDistance)
      const isSimilar = this.compareDistances(this.data.distancesToWrist, poseDistance, margin);
  
      if (isSimilar) {
        this.data.actualPose = this.data.poses[i].name
        console.log("actual pose is ", this.data.actualPose);
        this.poseTextEl.setAttribute('value', `Actual Pose: ${this.data.actualPose}`);
        break;
      }
    }


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