import { poses as posesLeft  } from './handy/Handy-poses-left.js'

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

  searchPose: function (controller) {
    let pose = []
    JOINTS.forEach((jointName, index) => {
      var jointIndex = index * 16; // Índice de inicio de la matriz de la articulación actual en jointPoses
      
      // var jointPose = new THREE.Matrix4().fromArray(jointPoses, jointIndex);
  
      var jointPosition = new THREE.Vector3();
      var jointRotation = new THREE.Quaternion();
      var jointPose = new THREE.Matrix4();

      if (jointName === 'wrist') {
        jointRotation.setFromRotationMatrix(jointPose.fromArray(controller.jointPoses, index * 16));
        pose.push(jointRotation)
      } else {
        jointPosition.setFromMatrixPosition(jointPose.fromArray(controller.jointPoses, index * 16));
        pose.push(jointPosition)
      }
    });
    return pose;
  },

  readLivePoseData: function(){

		const 
		hand  = this,
		wrist = hand.joints[ 'wrist' ],
		jointPositions    = [],
		digitTipPositions = [],

		preparePosition = function( joint ){

			const 
			jointMatrix = joint.matrix
			.clone()
			.premultiply( 

				// new THREE.Matrix4().copy( wrist.matrixWorld.invert() )
				wrist.matrixWorld.clone().invert()
			)

			
			//  Extract the X, Y, Z positions from the resulting matrix
			//  and return this as a flat Array
			//  with distances rounded to the nearest millimeter.
			
			return [ 

				Math.round( jointMatrix.elements[ 12 ] * 1000 ),
				Math.round( jointMatrix.elements[ 13 ] * 1000 ),
				Math.round( jointMatrix.elements[ 14 ] * 1000 )
			]
		},

		headPosition = 
			wrist !== undefined && !wrist.position.equals( Handy.VECTOR3_ZERO )
			? preparePosition( this.el.sceneEl.camera )
			: null,
		headRotation = 
			headPosition === null
			? null
			: this.el.sceneEl.camera.quaternion.toArray()
		
		Object.values( hand.joints )
		.forEach( function( joint, i ){
			if( joint !== undefined &&
				joint.position !== undefined &&
				joint.position.equals( Handy.VECTOR3_ZERO ) === false ){

				const preparedPosition = preparePosition( joint )
				jointPositions[ i ] = preparedPosition

				if( Handy.isDigitTipIndex( i )){

					digitTipPositions.push( preparedPosition )
				}
			}
		})

		return { 
			headPosition,
			headRotation,
			jointPositions,
			digitTipPositions
		}
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

    // TEST FUNCTION

    var trackedController = this.el.components['tracked-controls'];
    if (!trackedController) { return; }
    const hand = trackedController.controller.hand
    // console.log(trackedController.controller.hand)
    const wristJoint = trackedController.controller.hand.get("wrist");
    const indexFingerTipJoint2 = trackedController.controller.hand.get("index-finger-tip");

    for (const [joint, jointSpace] of trackedController.controller.hand) {
      // console.log(joint);
      // console.log(jointSpace);
    }

    const frame = this.el.sceneEl.frame;
    const referenceSpace = this.el.sceneEl.renderer.xr.getReferenceSpace();
    
    const indexFingerTipJoint = hand.get("index-finger-tip");
    const jointpose2 = frame.getJointPose(indexFingerTipJoint, referenceSpace); // XRJointPose


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
      var pose = this.searchPose(controller)
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
    var controller = this.el.components['hand-tracking-controls'];
    if (!controller) { return; }
    // var pose = this.searchPose(controller);
    // console.log(pose)
    this.el.emit('position', controller.bones);
  },

  searchPose: function (controller) {
    let pose = []
    JOINTS.forEach((jointName, index) => {
      var jointIndex = index * 16; // Índice de inicio de la matriz de la articulación actual en jointPoses
      
      // var jointPose = new THREE.Matrix4().fromArray(jointPoses, jointIndex);
  
      var jointPosition = new THREE.Vector3();
      var jointRotation = new THREE.Quaternion();
      var jointPose = new THREE.Matrix4();

      if (jointName === 'wrist') {
        jointRotation.setFromRotationMatrix(jointPose.fromArray(controller.jointPoses, index * 16));
        pose.push(jointRotation)
      } else {
        jointPosition.setFromMatrixPosition(jointPose.fromArray(controller.jointPoses, index * 16));
        pose.push(jointPosition)
      }
    });
    return pose;
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