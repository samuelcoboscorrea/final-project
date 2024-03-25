<script setup>

const emit = defineEmits(['onClickEvent'])

const props = defineProps({
  aprops: Object
})

const handleClickEvent = () => {
  console.log('clicked')
  emit('onClickEvent')
}

</script>

<template>
  <a-plane v-bind="props.aprops" @click="handleClickEvent">
    <slot></slot>
  </a-plane>
</template>