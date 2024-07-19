<template>
  <div class="basic-scenario">
    <div class="scene-container">
      <Scene id="save-pose-scene" :aprops="basicSceneProps">
        <Sky :aprops="skyProps" />

        <Assets>
          <img id="localTexture" :src="localTexture">
        </Assets>

        <Entity id="camera" :aprops="cameraEntityProps">
          <Camera/>
        </Entity>
        
        <Grid id="grid" :aprops="gridProps">
          <Tatami :items="items"/>
        </Grid>
        
        <SavePosePanel :id="'save-panel'" @selectItem="handleSavePose" :handsData="text"/>

        <Entity @obbcollisionstarted="handleNewPoseAdded" :aprops="leftHandProps"/>
        <Entity @pinchstarted="inputKeyboard" @newpose="handleNewPoseAdded" :aprops="rightHandProps"/>

      </Scene>
    </div>
  </div>
</template>

<script>
import Entity from '../entities/Entity.vue'
import Scene from '../scenarios/basic/Scene.vue'
import Sky from '../entities/basic/Sky.vue'
import Grid from '../entities/basic/Grid.vue'
import Assets from '../entities/basic/Assets.vue'
import Camera from '../entities/utils/Camera.vue'
import SavePosePanel from '../entities/custom/SavePosePanel.vue'
import Tatami from '../entities/custom/Tatami.vue'
import Keyboard from '../entities/custom/Keyboard.vue'
import localTexture from '@/assets/Tiles_051_4K_basecolor.png'
import { ref, onMounted, computed } from 'vue'

export default {
  name: 'SavePoseScenario',
  props: {
    savePose: Object,
  },
  components: {
    Assets,
    Entity,
    Scene,
    Sky,
    Grid,
    Camera,
    SavePosePanel,
    Tatami,
    Keyboard
  },
  setup(props, { emit }) {
    const items = ref([])
    const showControlPanel = ref(true)
    const controlPanelPosition = ref({
      x: 0,
      y: 0,
      z: 0
    })
    const poses = ref([])

    const keyboardProps = ref({
      position: { x: 0, y: 1.076, z: -0.5 }
    })

    const leftHandProps = ref({
      id: 'leftHand',
      'hand-tracking-grab-controls': {
        hand: 'left'
      },
      'obb-collider': 'showColliders: true',
      'hand-positions': '',
    })

    const rightHandProps = ref({
      id: 'rightHand',
      'hand-tracking-grab-controls': {
        hand: 'right'
      },
      'hand-pose-detector': '',
      'obb-collider': '',
      'detect-pose': {
        poses: []
      },
    })

    const getItems = computed(() => {
      console.log(items)
      return items.value
    });

    const basicSceneProps =  ref({
      position: '0 0 0',
      'xr-mode-ui': {
        XRMode: 'xr'
      },
      background: {
        color: '#ECECEC'
      },
      'obb-collider': {
        showColliders: false
      },
    })

    /* SIMPLE OBJECTS PROPERTIES */
    const gridProps = ref({
      material: {
        src: '#localTexture'
      }
    });

    const skyProps = ref({
      material: {
        shader: 'sunSky' // Establecer el color inicial del cielo
      }
    });

    const cameraEntityProps =  ref({
      'handy-controls': "right:#right-gltf;materialOverride:right;",
      'material': "color:gold;metalness:1;roughness:0;"
    })

    onMounted(() => {
    })

    // FUNCTIONS

    const handleSavePose = () => {
      const scene = document.querySelector('#save-pose-scene');
      if (scene) {
        const event = new Event('save-pose');
        scene.dispatchEvent(event);
      }
    }

    const handleNewPoseAdded = (newPose) => {
      console.log(newPose)
    }

    const inputKeyboard = (newPose) => {
      console.log(newPose)
    }

    return {
      leftHandProps,
      rightHandProps,
      getItems,
      basicSceneProps,
      gridProps,
      skyProps,
      cameraEntityProps,
      localTexture,
      keyboardProps,
      handleSavePose,
      handleNewPoseAdded,
      inputKeyboard
    };
  }
};
</script>