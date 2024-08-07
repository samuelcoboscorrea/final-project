import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Scenario from '../views/Scenes.vue'
import BasicScenario from '@/components/aframe/scenarios/BasicScenario.vue';
import EditorScenario from '@/components/aframe/scenarios/EditorScenario.vue';
import PanelScenario from '@/components/aframe/scenarios/PanelScenario.vue';
import SavePoseScenario from '@/components/aframe/scenarios/SavePoseScenario.vue';
import SimpleScenario from '@/components/aframe/scenarios/SimpleScenario.vue';
import basicScenarioImage from '@/assets/img/basic-scenario.png';
import editorScenarioImage from '@/assets/img/editor-scenario.png';
import panelScenarioImage from '@/assets/img/panel-scenario.png';
import savePoseScenarioImage from '@/assets/img/save-pose-scenario.png';
import simpleScenarioImage from '@/assets/img/simple-scenario.png';

const requireComponent = require.context('../components/aframe/scenarios/', true, /Scenario\.vue$/)
const autoGeneratedRoutes = requireComponent.keys().map(fileName => {
  // Obtener el nombre del componente del archivo
  const componentName = fileName.match(/^\.\/(.*)\.vue$/)[1]

  const kebabCaseName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

  const routeName = kebabCaseName.endsWith('-scenario') ? kebabCaseName.slice(0, -9) : kebabCaseName

  return {
    path: `/scenario/${routeName}`,
    name: componentName,
    component: requireComponent(fileName).default
  }
})

const manualRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/scenario',
  //   name: 'Scenario',
  //   meta: {
  //     description: 'Scenario simple list view'
  //   },
  //   component: Scenario
  // },
  {
    path: '/basic-scenario',
    name: 'BasicScenario',
    meta: {
      description: 'BasicScenario simple list view',
      image: basicScenarioImage
    },
    component: BasicScenario
  },
  {
    path: '/editor-scenario',
    name: 'EditorScenario',
    meta: {
      description: 'EditorScenario for creating and editing scenes',
      image: editorScenarioImage
    },
    component: EditorScenario
  },
  {
    path: '/panel-scenario',
    name: 'PanelScenario',
    meta: {
      description: 'PanelScenario with dashboard view',
      image: panelScenarioImage
    },
    component: PanelScenario
  },
  {
    path: '/save-pose-scenario',
    name: 'SavePoseScenario',
    meta: {
      description: 'SavePoseScenario for saving and loading poses',
      image: savePoseScenarioImage
    },
    component: SavePoseScenario
  },
  {
    path: '/simple-scenario',
    name: 'SimpleScenario',
    meta: {
      description: 'SimpleScenario for testing purposes',
      image: simpleScenarioImage
    },
    component: SimpleScenario
  }
]

const routes = [...manualRoutes, /*...autoGeneratedRoutes*/]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

console.log(router.getRoutes())

export default router
