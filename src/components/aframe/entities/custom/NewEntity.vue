<template>
  <Entity :aprops="entityProps"
    @click="handleClickEvent">
    <slot></slot>
  </Entity>
</template>

<script>
import { ref, onMounted } from 'vue'
import Entity from '@/components/aframe/entities/Entity.vue'

export default {
  name: 'NewEntity',
  components: {
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
    const entityProps = ref({
      position: "0 4 0",
      rotation: "0 0 0",
      width: 5
    })
    const handleClickEvent = (event) => {
      console.log(event)
    }
    onMounted(() => {
    })

    return { entityProps, handleClickEvent }
  }
}
</script>