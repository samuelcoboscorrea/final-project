<template>
  <div class="basic-scenario">
    <div class="scene-container">
      <Scene :id="'my-scene'" :aprops="basicSceneProps">
        <Sky :aprops="skyProps" />
        <Entity id="camera" :aprops="cameraEntityProps">
          <Camera>
          </Camera>
        </Entity>
        
        <Grid id="grid" :aprops="gridProps">
          <Tatami :items="items"/>
        </Grid>

        <SavePosePanel :id="'saver-panel'" @selectItem="handleSavePose" :position="'0.2 1.4 -0.5'" :handsData="text"/>

        <Entity id="left-hand" @pinchstarted="controlEvent" :aprops="leftHandProps"/>
          
        <Entity id="right-hand" @position="controlEvent" @handdown="handleHandDown" @handup="handleHandUp" :aprops="rightHandProps">
          <ControlPanel :id="'control-panel'" :visible="showControlPanel" :position="controlPanelPosition" @selectItem="handleSelectItem" :handsData="text"/>
        </Entity>

      </Scene>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import Entity from '../../entities/Entity.vue'
import Box from '../../entities/basic/Box.vue'
import Scene from '../basic/Scene.vue'
import Sky from '../../entities/basic/Sky.vue'
import Grid from '../../entities/basic/Grid.vue'
import Camera from '../../entities/utils/Camera.vue'
import ControlPanel from '../../entities/custom/ControlPanel.vue'
import SavePosePanel from '../../entities/custom/SavePosePanel.vue'
import Tatami from '../../entities/custom/Tatami.vue'
import { ref, onMounted, computed } from 'vue'

const count = ref(0)

const emit = defineEmits(['save-pose'])

const items = ref([])
const showControlPanel = ref(true)
const controlPanelPosition = ref({
  x: 0,
  y: 0,
  z: 0
})

const leftHandProps = ref({
  id: 'leftHand',
  'hand-tracking-grab-controls': {
    hand: 'left'
  },
  'obb-collider': '',
  'hand-positions': '',
})

const rightHandProps = ref({
  id: 'rightHand',
  'hand-tracking-grab-controls': {
    hand: 'right'
  },
  'hand-pose-detector': '',
  'obb-collider': '',
  'detect-pose': {
    poses: []
  },
  // 'hand-down-detector': {
  //   hand: 'right',
  //   fingerTipJoint: 'index-finger-tip'
  // },
  // 'hand-positions': ''
})

const getItems = computed(() => {
  console.log(items)
  return items.value
});

const basicSceneProps =  ref({
  position: '0 0 0',
  'xr-mode-ui': {
    XRMode: 'xr'
  },
  background: {
    color: '#ECECEC'
  },
  'obb-collider': {
    showColliders: false
  },
})

onMounted(() => {
})

const text = ref('hola que tal')

/* SIMPLE OBJECTS PROPERTIES */
const gridProps = ref({
  width: '100',
  height: '100',
  color: '#888',
  rotation: '-90 0 0',
  opacity: '0.5',
  position: '0 0 0'
});

const skyProps = ref({
  material: {
    shader: 'sunSky' // Establecer el color inicial del cielo
  }
});

const cameraEntityProps =  ref({
  'handy-controls': "right:#right-gltf;materialOverride:right;",
  'material': "color:gold;metalness:1;roughness:0;"
})

const createSimpleItem = (type) => {
  return {
    position: '0 -1.6 1.4',
    geometry: {
      radius: 0.3,
      primitive: type,
      width: 0.2,
      height: 0.5,
      depth: 0.5,
    },
    material: {
      color: 'red'
    },
    grabbable: ''
  }
}

const handleSelectItem = (item) => {
  items.value.push(createSimpleItem(item.type))
  // console.log(items)
}

const controlEvent = (event) => {
  // console.log(event)
}

const handleHandDown = (event) => {
  showControlPanel.value = false
}

const handleHandUp = (event) => {
  controlPanelPosition.value = {
    x: event.detail.x,
    y: event.detail.y + 0.2,
    z: event.detail.z
  };
  showControlPanel.value = true
  // console.log(event)
  // console.log(controlPanelPosition.value)
}

const handleSavePose = () => {
  const scene = document.querySelector('#my-scene');
  if (scene) {
    const event = new Event('save-pose');
    scene.dispatchEvent(event);
  }
}

</script>