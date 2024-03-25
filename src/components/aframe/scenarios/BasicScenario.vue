<template>
  <div class="basic-scenario">
    <div class="scene-container">
      <Scene embedded :aprops="basicSceneProps">
        <Sky :aprops="skyProps" />
        <Entity id="camera" :aprops="cameraEntityProps">
          <Camera />
        </Entity>

        <Grid :aprops="gridProps" />

        <Entity ref="entity-box" :aprops="entityProps">
          <Box ref="first-box" :aprops="boxProps" @onClickEvent="handleBoxClickEvent(boxProps)"/>
        </Entity>

      </Scene>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import Entity from '../entities/Entity.vue'
import Box from '../entities/basic/Box.vue'
import Camera from '../entities/utils/Camera.vue'
import Scene from '../scenarios/basic/Scene.vue'
import Sky from '../entities/basic/Sky.vue'
import Grid from '../entities/basic/Grid.vue'

import { ref } from 'vue'

/* SIMPLE OBJECTS PROPERTIES */
const gridProps = ref({
  width: '100',
  height: '100',
  color: '#888',
  rotation: '-90 0 0',
  opacity: '0.5'
});

const skyProps = ref({
  material: {
    shader: 'sunSky' // Establecer el color inicial del cielo
  }
});

const basicSceneProps =  ref({
  background: {
    color: '#ECECEC'
  },
  cursor: {
    rayOrigin: 'mouse'
  }
})

const cameraEntityProps =  ref({
  position: '1 1 5'
})

const entityProps =  ref({
  position: '2 2 2'
})

const boxProps =  ref({
  material: {
    color: 'red'
  }
})
/* END PROPERTIES */

// functions

const handleBoxClickEvent = () => {
  console.log(boxProps.value.material)
  console.log(boxProps.value.material.color === 'red')
  if (boxProps.value.material.color === 'blue') {
    boxProps.value.color = 'red'
  } else if (boxProps.value.material.color === 'red') {
    boxProps.value.color = 'blue'
  }
}

</script>