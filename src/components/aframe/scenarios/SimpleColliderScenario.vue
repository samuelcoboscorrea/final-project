<template>
  <div id="simple-collider-scenario">
    <div class="scene-container">
      <a-scene cursor="rayOrigin: mouse" embedded>
        <ButtonEntity/>
        <a-entity id="collider" geometry="primitive: box" position="0 1.6 -5" rotation="0 45 0" scale="1 1 1" aabb-collider></a-entity>
        <a-sphere test position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"
            animation="startEvents: click; property: position;
                from: -1 1.5 -3; to: -1 0.5 -3; dur: 1000"
            hello="event: click; message: Clicked!">
        </a-box>
      </a-scene>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ButtonEntity from '@/components/aframe/entities/ButtonEntity.vue'

const count = ref(0)
console.log(count)


</script>
