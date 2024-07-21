<script setup>
import { watch } from 'vue'
const emit = defineEmits(['onClickEvent', 'onChangeProps'])

const props = defineProps({
  aprops: Object
})

watch(props, (newValue, oldValue) => {
  emit('onChangeProps')
});

const handleClickEvent = () => {
  emit('onClickEvent')
}

</script>

<template>
  <a-entity v-bind="props.aprops" @click="handleClickEvent">
    <slot></slot>
  </a-entity>
</template>