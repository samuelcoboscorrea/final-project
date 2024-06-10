
<template>
  <Entity @superkeyboardinput="handleKeyboardInput" :aprops="keyboardAttributes">
  </Entity>
</template>

<script>
import { onMounted, ref } from 'vue'
import Entity from '@/components/aframe/entities/Entity.vue'

export default {
  name: 'Keyboard',
  components: {
    Entity
  },
  props: {
    keyboardProps: Object
  },
  setup(props, { emit }) {

    const keyboardAttributes = ref({
      id: "keyboard",
      'super-keyboard': {
        hand: "#raytracing",
        imagePath: "..",
        multipleInputs: true
      },
      position: props.keyboardProps.position,
      rotation: {
        x: -30,
        y: 0,
        z: 0
      },
      grabbable: ''
    });

    const handleClickEvent = (event) => {
      emit('onClick')
    }

    const handleKeyboardInput = (event) => {
      console.log(event.detail.value)
    }

    onMounted(() => {
      console.log(keyboardAttributes.value)
    })

    return { keyboardAttributes, handleClickEvent, handleKeyboardInput }
  }
}
</script>