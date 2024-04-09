<template>
  <Entity :aprops="menuProps">
    <Entity :aprops="backgroundMenuProps" />
    <!-- <Slider :data="sliderData" @sliderchanged="console.log(event)" :handsData="props.handsData"/> -->
    <ButtonLabel id="testid" text="sphere" width="0.12" color="red" :position="{ x: -0.15, y: 0, z: 0 }"/>
    <ButtonLabel id="testid2" text="box" width="0.12" color="red" :position="{ x: 0, y: 0, z: 0 }"/>
    <ButtonLabel id="testid3" text="torus" width="0.12" color="red" :position="{ x: 0.15, y: 0, z: 0 }"/>
  </Entity>
</template>

<script setup>
import Entity from '../Entity.vue'
import Slider from './Slider.vue'
import ButtonLabel from '@/components/aframe/entities/custom/ButtonLabel.vue'
import { ref } from 'vue'

const emit = defineEmits(['onClickEvent'])

const props = defineProps({
  data: Object,
  handsData: String,
})

const handleClickEvent = () => {
  emit('onClickEvent')
}

/* entities props */

const menuProps = ref({
  position: '0 0 -0.9525',
  rotation: '-20 0 0',
  grabbable: ''
});

const backgroundMenuProps = ref({
  geometry: {
    primitive: 'box',
    width: 0.6,
    height: 0.40,
    depth: 0.01
  },
  material: {
    color: '#65a2e0'
  },
  position: '0 0 -0.025'
});

const sliderData = ref({
  trackSlideProps: {
    geometry: {
      primitive: 'box',
      height: 0.01,
      width: 0.5,
      depth: 0.01
    },
    material: {
      color: 'white'
    }
  },
  pickSlideProps: {
    geometry: {
      primitive: 'cylinder',
      radius: 0.02,
      height: 0.05
    },
    material: {
      color: '#3a50c5'
    },
    pinchable: {
      pinchDistance: 0.05
    },
    rotation: { x: 90, y: 0, z: 0 },
    'color-change': ''
  }
});

</script>
