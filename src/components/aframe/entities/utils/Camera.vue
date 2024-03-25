<script setup>

const props = defineProps({
  aprops: Object
})

</script>

<template>
  <a-camera v-bind="props.aprops">
    <slot></slot>
  </a-camera>
</template>
