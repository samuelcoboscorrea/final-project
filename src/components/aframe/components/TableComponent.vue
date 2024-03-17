<template>
<a-entity position="0 0.5 -5">
        <!-- Mesa -->
        <a-entity position="0 0 0" >
          <!-- Superficie de la mesa -->
          <a-box width="2" height="0.1" depth="1" color="brown" rotation="10 0 0"></a-box>
          <!-- Patas de la mesa -->
          <a-entity position="-0.9 -0.55 -0.4">
            <a-box width="0.1" height="1" depth="0.1" color="gray"></a-box>
          </a-entity>
          <a-entity position="0.9 -0.55 -0.4">
            <a-box width="0.1" height="1" depth="0.1" color="gray"></a-box>
          </a-entity>
          <a-entity position="-0.9 -0.55 0.4">
            <a-box width="0.1" height="1" depth="0.1" color="gray"></a-box>
          </a-entity>
          <a-entity position="0.9 -0.55 0.4">
            <a-box width="0.1" height="1" depth="0.1" color="gray"></a-box>
          </a-entity>
        </a-entity>
        
        <!-- Cuadro de mandos -->
        <a-box width="1.5" height="0.1" depth="0.5" position="0 0.15 0" color="gray" rotation="10 0 0"></a-box>
        <!-- Otros objetos en el cuadro de mandos, como botones, pantallas, etc. -->
      </a-entity>
</template>