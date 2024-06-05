import { RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'Characters',
    component: () => import('@/modules/Character/pages/PCharacters.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/character/:id',
    name: 'CharactersItem',
    component: () => import('@/modules/Character/pages/PCharactersItem.vue'),
    meta: {
      layout: 'default',
    },
  },
]

export default routes
