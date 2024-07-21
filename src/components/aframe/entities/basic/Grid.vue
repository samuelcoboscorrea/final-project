<script setup>

const props = defineProps({
  aprops: Object,
})

</script>

<template>
  <a-grid v-bind="props.aprops">
    <slot></slot>
  </a-grid>
</template>