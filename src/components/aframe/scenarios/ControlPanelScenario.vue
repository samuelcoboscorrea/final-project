<template>
  <div class="basic-scenario">
    <div class="scene-container">
      <Scene :aprops="basicSceneProps">
        <Sky :aprops="skyProps" />
        <Entity id="camera" :aprops="cameraEntityProps">
          <Camera />
        </Entity>

        <Grid :aprops="gridProps" />

        <ControlPanel @obbcollisionstarted="handleCollisionButton" @obbcollisionended="handleCollisionButton" @pinchedmoved="handlePointUp" @pinchedstarted="handlePointUp" :handsData="text"/>

        <a-text :value="text">

        </a-text>

        <Entity :aprops="{ id: 'leftHand', 'hand-tracking-controls': { hand: 'left' }, 'obb-collider': '' }"/>
        <Entity :aprops="{ id: 'rightHand', 'hand-tracking-controls': { hand: 'right' }, 'obb-collider': '' }"
          @pinchstarted="handlePinchStarted"
          @pinchended="handlePinchEnded"
          @pinchmoved="handlePinchMoved"
        />
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
import { ref, onMounted, provide } from 'vue'

const leftHand = ref(null);

provide('leftHand', leftHand);

const count = ref(0)
const handleCollisionButton = (event) => {
  console.log(event)
  count.value += 1
  text.value = 'asdf ' + count.value.toString()
}

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
  position: '0 0 0'
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

</script>