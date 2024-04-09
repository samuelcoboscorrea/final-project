<template>
  <div class="basic-scenario">
    <div class="scene-container">
      <a-scene background="color: #EEEEE" xr-mode-ui="XRMode: xr">
        <a-box grabbable position="-0.1 0.8 -0.3" rotation="0 45 0" color="#4CC3D9"
            depth="0.1" height="0.1" width="0.1"></a-box>
        <a-sphere grabbable position="0 0.8 -0.3" radius="0.2" color="#EF2D5E"></a-sphere>
        <a-cylinder grabbable position="0.1 0.8 -0.3" radius="0.2" height="0.2" color="#FFC65D"></a-cylinder>
        <a-plane position="0 0 -0.7" rotation="-90 0 0" width="1" height="1" color="#7BC8A4"></a-plane>

        <a-entity id="leftHand" hand-tracking-grab-controls="hand: left;"></a-entity>
        <a-entity id="rightHand" hand-tracking-grab-controls="hand: right;"></a-entity>

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