<template>
  <Entity id="slider" :aprops="sliderProps">
    <Entity id="track-element" :aprops="props.data.trackSlideProps" />
    <Entity ref="pickerEl" id="pick-element" :aprops="props.data.pickSlideProps" />
    <a-text :value="props.handsData"></a-text>
  </Entity>
</template>

<script setup>
import Entity from '../Entity.vue'
import { ref } from 'vue'

const emit = defineEmits(['onClickEvent', 'sliderchanged'])

const props = defineProps({
  data: Object,
  handsData: String
})

const handleClickEvent = () => {
  emit('onClickEvent')
}

const text = ref('hola que tal')

const sliderProps = ref({
  position: '0 0.10 0'
});

const textProps = ref({
  position: '0 0.10 0'
});

// const trackSlideProps = ref({
//   geometry: {
//     primitive: 'box',
//     height: 0.01,
//     width: 0.5,
//     depth: 0.01
//   },
//   material: {
//     color: 'white'
//   }
// });

// const pickSlideProps = ref({
//   geometry: {
//     primitive: 'cylinder',
//     radius: 0.02,
//     height: 0.05
//   },
//   material: {
//     color: '#3a50c5'
//   },
//   pinchable: {
//     pinchDistance: 0.05
//   },
//   rotation: { x: 90, y: 0, z: 0 },
//   'color-change': ''
// });

/* fucntions */

const onPinchedMoved = (event) => {
  text.value = JSON.stringify(event.detail.position)
  console.log(event)
  const el = this.$refs.trackEl;
  const evtDetail = {};
  const halfWidth = this.width / 2;
  const localPosition = new THREE.Vector3();

  localPosition.copy(event.detail.position);
  el.object3D.updateMatrixWorld();
  el.object3D.worldToLocal(localPosition);

  if (localPosition.x < -halfWidth || localPosition.x > halfWidth) { return; }

  this.$refs.pickerEl.object3D.position.x = localPosition.x;

  evtDetail.value = (this.$refs.pickerEl.object3D.position.x + halfWidth) / this.width;

  emit('sliderchanged', evtDetail);
}

</script>
