<template>
  <div class="editor-scenario">
    <div class="scene-container">
      <a-scene embedded background="color: #ECECEC;">
        <a-entity position="0 1.6 0">
          <a-camera></a-camera>
        </a-entity>

        <SelectorComponent/>

        <a-grid width="100" height="100" color="#888" rotation="-90 0 0" opacity="0.5"></a-grid>

        <a-entity position="0 1.6 0">
          <a-box width="1.5" height="0.1" depth="0.5" color="gray" rotation="90 0 0" material="color: #779fca; shader: flat; height: 256.22" geometry="height: 0.03; depth: 1.09" visible=""></a-box><a-box width="1.5" height="0.1" depth="0.5" color="gray" rotation="90 0 0" material="color: #ca77c3; shader: flat; height: 256.22" geometry="width: 0.24; height: 0.07; depth: 0.13" visible="" position="-0.01 0 0.04">
          </a-box>
        </a-entity>

        <TableComponent :testProperty="'testProperty executed'"/>
      </a-scene>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import TableComponent from '@/components/aframe/components/TableComponent.vue'
import SelectorComponent from '@/components/aframe/components/SelectorComponent.vue'

// const elements = {
//   box: null
// }

</script>