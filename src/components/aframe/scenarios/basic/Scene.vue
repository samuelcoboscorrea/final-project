<script setup>

const props = defineProps({
  aprops: Object
})

</script>

<template>
  <a-scene v-bind="props.aprops">
    <slot></slot>
  </a-scene>
</template>