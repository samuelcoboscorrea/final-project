<template>
  <div class="basic-scenario">
    <div class="scene-container">
      <a-scene background="color: #EEEEE" xr-mode-ui="XRMode: xr">
        <a-entity id="rig">
          <a-camera></a-camera>
          <!-- left hand can teleport, and drag the world position -->
          <a-entity hand-tracking-controls="hand: left" hand-tracking-extras
          hand-teleport="rig: #rig; origin: a-camera" drag-move="rig: #rig; speed: 5">
          </a-entity>
        
          <!-- right hand can rotate the world by dragging -->
          <a-entity hand-tracking-controls="hand: right" hand-tracking-extras drag-rotate="rig: #rig">
          </a-entity>
        </a-entity>

      </a-scene>

      <!-- Componente para permitir arrastrar y rotar objetos -->
      
    </div>
  </div>
</template>

<script setup>
import AFRAME from 'aframe'
AFRAME.registerComponent('rotate-on-drag', {
  init: function() {
    this.el.addEventListener('dragmove', (e) => {
      // Obtiene el componente de rotación del elemento padre (la palanca)
      console.log('asdfasfd')
      const rotation = this.el.parentElement.getAttribute('rotation');
      // Actualiza la rotación según el movimiento del objeto
      rotation.y += e.detail.positionChange.x / 3;
      this.el.parentElement.setAttribute('rotation', rotation);
    });
  }
});
</script>