import { RouteRecordRaw } from 'vue-router'

import CharacterRoutes from '@/modules/Character/router'
import LocationRoutes from '@/modules/Locations/router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: () => import('@/layouts/Default/PDefault.vue'),
    children: [...CharacterRoutes, ...LocationRoutes],
  },
]

export default routes
