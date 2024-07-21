<template>
  <Entity id="saver-panel" :aprops="menuProps">
    <Box :aprops="columnProps" >
      <ButtonEnter v-bind="buttonEnter" @selectItem="handleSelectItem(buttonEnter)"/>
    </Box>
  </Entity>
</template>

<script>
import Entity from '../Entity.vue'
import Box from '@/components/aframe/entities/basic/Box.vue'
import ButtonEnter from '@/components/aframe/entities/custom/ButtonEnter.vue'
import { ref, onMounted, reactive } from 'vue'

export default {
  name: 'SavePosePanel',
  components: {
    Entity,
    Box,
    ButtonEnter
  },
  props: {
    data: Object,
    handsData: String
  },
  setup(props, { emit }) {
    const position = '0.2 1.4 -0.5'

    /* entities props */
    const buttonEnter = ref({
      id: 'box-item',
      type: 'box',
      text: 'save',
      width: 0.10,
      color: 'red',
      position: {
        x: 0,
        y: 0.5,
        z: 0
      },
    })

    const menuProps = reactive({
      // position: position,
      // rotation: '-20 -15 0',
      // grabbable: ''
    });

    const backgroundMenuProps = ref({
      geometry: {
        primitive: 'box',
        width: 0.6,
        height: 0.40,
        depth: 0.01
      },
      material: {
        color: '#65a2e0',
        roughnessMap: 'url(https://aframe.io/sample-assets/assets/images/bricks/brick_roughness.jpg)'
      },
      position: '0 1 0'
    });

    const columnProps = ref({
      geometry: {
        primitive: 'cylinder',
        radius: 0.07,
        height: 1,
        depth: 0.1
      },
      material: {
        src: 'url(https://aframe.io/sample-assets/assets/images/bricks/brick_roughness.jpg)', // Textura
        color: '#FF5733', // Color vibrante
        repeat: '2 2', // Repetir la textura
        roughness: 0.5, // Ajustar la rugosidad
        metalness: 0.3 // Ajustar la metalidad para reflejos
      },
      position: '0 0.5 0'
    });

    const handleSelectItem = (item) => {
      emit('selectItem', { type: item.type })
    }

    const handleClickEvent = () => {
      emit('onClickEvent')
    }

    onMounted(() => {
      console.log(props)
    })

    return {
      buttonEnter, menuProps, backgroundMenuProps, columnProps,
      handleClickEvent,
      handleSelectItem
    }
  }
}
</script>
