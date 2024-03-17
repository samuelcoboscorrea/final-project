<template>
  <div class="editor-scenario">
    <div class="scene-container">
      <a-scene embedded background="color: #ECECEC;">
        <a-entity position="0 1.6 0">
          <a-camera></a-camera>
        </a-entity>

        <a-grid width="100" height="100" color="#888" rotation="-90 0 0" opacity="0.5"></a-grid>

        <TableComponent/>
      </a-scene>
    </div>
    
  </div>
</template>

<script setup>
import TableComponent from '@/components/aframe/components/TableComponent.vue'
console.log('ini')
</script>