<template>
  <Box @click="handleClickEvent" :aprops="tatamiProps">
    <slot></slot>
    <Entity v-for="(item, index) in items" :key="index" v-bind="item"/>
  </Box>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import Box from '@/components/aframe/entities/basic/Box.vue'
import Entity from '@/components/aframe/entities/Entity.vue'

export default {
  name: 'Tatami',
  components: {
    Box,
    Entity
  },
  props: {
    id: String,
    text: String,
    width: String,
    color: String,
    position: Object,
    items: Array
  },
  setup(props, { emit }) {
    const label = ref(null)
    const items = ref(props.items)
    const tatamiProps = ref({
      position: "0 4 0",
      rotation: "0 0 0",
      width: 5,
      height: 5,
      depth: 0.2,
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

    watch(items, (newValue, oldValue) => {
      // Función que se ejecuta cuando cambia el valor de myVar
      console.log('Nuevo valor:', newValue);
      console.log('Valor anterior:', oldValue);
    });

    return { label, tatamiProps, handleClickEvent }
  }
}
</script>