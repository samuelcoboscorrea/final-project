<template>
  <Box @click="handleClickEvent" :aprops="tatamiProps">
    <slot></slot>
  </Box>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import Box from '@/components/aframe/entities/basic/Box.vue'


export default {
  name: 'Tatami',
  components: {
    Box
  },
  props: {
    id: String,
    text: String,
    width: String,
    color: String,
    position: Object
  },
  setup(props, { emit }) {
    const label = ref(null)
    const tatamiProps = ref({
      position: "0 4 0",
      rotation: "0 0 0",
      width: 5,
      height: 5,
      dept: 0.2,
      color: "#7BC8A4",
      material: {
        src: 'url(https://i.imgur.com/mYmmbrp.jpeg)'
      },
      geometry: "segmentsHeight: 2; segmentsWidth: 2; segmentsDepth: 2"
    })
    const handleClickEvent = (event) => {
      console.log(event)
      // emit('customEvent')
    }

    onMounted(() => {
    })

    return { label, tatamiProps, handleClickEvent }
  }
}
</script>