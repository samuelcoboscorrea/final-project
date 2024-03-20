<template>
  <div class="scenario">
    <h1>Scenarios A-FRAME</h1>
    <div class="scene__container">
      <SimpleColliderScenario/>
      <SimpleScenario/>
    </div>
  </div>
</template>

<script setup>
import SimpleScenario from '@/components/aframe/scenarios/SimpleScenario.vue'
import SimpleColliderScenario from '@/components/aframe/scenarios/SimpleColliderScenario.vue'
</script>

<style scoped lang="scss">

.scenario {
  overflow: auto;
  background-color: beige;
}

</style>