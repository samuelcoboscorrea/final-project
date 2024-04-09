<template>
  <Entity @pressedstarted="handleClickEvent" @click="handleClickEvent" v-if="initialized" :aprops="buttonProps">
    <Entity :aprops="labelProps"/>
    <!-- <a-text :value="label"></a-text> -->
  </Entity>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import Entity from '@/components/aframe/entities/Entity.vue'

export default {
  name: 'ButtonLabel',
  components: {
    Entity
  },
  props: {
    id: String,
    text: String,
    width: String,
    color: String,
    position: Object
  },
  setup(props, { emit }) {
    const initialized = ref(false)
    const label = ref(props.text)
    const count = ref(0)
    const animationObject = ref(null)
    const positionAnimation = {
      x: props.position.x,
      y: props.position.y,
      z: props.position.z - 0.03,
    }
    const buttonProps = ref({
      id: props.id,
      position: props.position,
      geometry: {
        primitive: 'box',
        width: props.width,
        height: 0.05,
        depth: 0.04,
      },
      pressable: '',
      material: {
        color: props.color
      },
      'obb-collider': '',
      animation: {
        property: 'position',
        from: props.position,
        to: positionAnimation,
        loop: 1,
        dur: 500,
        easing: 'easeInOutQuad',
        dir: 'alternate',
        autoplay: false,
        startEvents: 'click, pressedstarted',
        enabled: true
      }
    });
    const labelProps = computed(() => ({
      position: '0 0 0.02',
      text: {
        value: label.value, // Accedemos al valor actual de label
        color: 'white',
        align: 'center'
      }
    }));
    
    const handleClickEvent = (event) => {
      buttonProps.value.material = Object.assign({}, buttonProps.value.material, { color: 'blue' });
      // emit('customEvent')
    }

    onMounted(() => {
      initialized.value = true
    })

    return { initialized, label, count, buttonProps, labelProps, handleClickEvent }
  }
}
</script>