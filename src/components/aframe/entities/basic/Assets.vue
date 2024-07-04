<script setup>

const props = defineProps({
  aprops: Object,
})

</script>

<template>
  <a-assets v-bind="props.aprops">
    <slot></slot>
  </a-assets>
</template>