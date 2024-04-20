<template>
  <Entity @animationbegin="handleAnimationState" @animationcomplete="handleAnimationState" @pressedstarted="handleClickEvent" @click="handleClickEvent" v-if="initialized" :aprops="buttonProps">
    <Entity :aprops="labelProps"/>
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
    const animationFinished = ref(true)
    const animationObject = ref(null)
    const positionAnimation = {
      x: props.position.x,
      y: props.position.y,
      z: props.position.z - 0.03,
    }
    const buttonProps = computed(() => ({
      id: props.id,
      position: props.position,
      geometry: {
        primitive: 'box',
        width: props.width,
        height: 0.05,
        depth: 0.04,
      },
      pressable: {
        animationFinished: animationFinished.value
      },
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
    }));
    const labelProps = computed(() => ({
      position: '0 0 0.02',
      text: {
        value: label.value,
        color: 'white',
        align: 'center'
      }
    }));
    
    const handleClickEvent = (event) => {
      emit('selectItem')
    }

    const handleAnimationState = (event) => {
      // buttonProps.value.pressable = Object.assign({}, buttonProps.value.pressable, { animationFinished: true });
      animationFinished.value = !animationFinished.value
      // emit('customEvent')
    }

    const textLabel = computed(() => {
      return animationFinished.value
    })

    onMounted(() => {
      initialized.value = true
    })

    return { initialized, label, count, buttonProps, labelProps, handleClickEvent, handleAnimationState, textLabel }
  }
}
</script>