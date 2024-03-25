<script setup>

const props = defineProps({
  aprops: Object
})

</script>

<template>
  <a-sky v-bind="props.aprops">
    <slot></slot>
  </a-sky>
</template>