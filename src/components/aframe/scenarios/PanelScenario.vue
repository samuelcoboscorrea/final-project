<template>
  <div class="basic-scenario">
    <div class="scene-container">
      <Scene :aprops="basicSceneProps">
        <Sky :aprops="skyProps" />
        <Entity id="camera" :aprops="cameraEntityProps">
          <Camera>
          </Camera>
          <Entity :aprops="leftHandProps"/>
          <Entity :aprops="rightHandProps"
            @pinchstarted="handlePinchStarted"
            @pinchended="handlePinchEnded"
            @pinchmoved="handlePinchMoved"
          />
        </Entity>
        
        <ControlPanel @selectItem="handleSelectItem" :position="'0 1.5 -0.5'" :handsData="text"/>
        
        <Grid id="grid" :aprops="gridProps">
          <Tatami :items="items"/>
        </Grid>

      </Scene>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import Entity from '../entities/Entity.vue'
import Box from '../entities/basic/Box.vue'
import Scene from '../scenarios/basic/Scene.vue'
import Sky from '../entities/basic/Sky.vue'
import Grid from '../entities/basic/Grid.vue'
import Camera from '../entities/utils/Camera.vue'
import ControlPanel from '../entities/custom/ControlPanel.vue'
import Tatami from '../entities/custom/Tatami.vue'
import { ref, onMounted, computed } from 'vue'

const count = ref(0)

const items = ref([])

const leftHandProps = ref({
  id: 'leftHand',
  'hand-tracking-grab-controls': {
    hand: 'left'
  },
  'obb-collider': '',
  'hand-tracking-extras': '',
  'hand-teleport': {
    rig: '#camera',
    origin: 'a-camera'
  }
})

const rightHandProps = ref({
  id: 'rightHand',
  'hand-tracking-grab-controls': {
    hand: 'right'
  },
  'hand-tracking-extras': '',
  'obb-collider': ''
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
  }
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
})

const handlePinchMoved = (event) => {
  console.log(event)
  text.value = JSON.stringify(event.detail.position)
}
const handlePinchStarted = (event) => {
  console.log(event)
  text.value = JSON.stringify(event.detail.position)
}
const handlePinchEnded = (event) => {
  console.log(event)
  text.value = JSON.stringify(event.detail.position)
}

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
  console.log(item)
  items.value.push(createSimpleItem(item.type))
  console.log(items)
}


</script>