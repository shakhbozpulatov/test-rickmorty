import { RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/character',
    name: 'Characters',
    component: () => import('@/modules/Character/pages/PCharacters.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/characters/:id',
    name: 'CharactersItem',
    component: () => import('@/modules/Character/pages/PCharactersItem.vue'),
    meta: {
      layout: 'default',
    },
  },
]

export default routes
