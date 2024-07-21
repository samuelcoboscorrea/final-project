<script setup>

const props = defineProps({
  aprops: Object,
})

</script>

<template>
  <a-ocean v-bind="props.aprops">
    <slot></slot>
  </a-ocean>
</template>