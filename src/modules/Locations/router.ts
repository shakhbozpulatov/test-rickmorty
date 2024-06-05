import { RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/locations',
    name: 'Locations',
    component: () => import('@/modules/Locations/pages/PLocations.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/locations/:id',
    name: 'LocationsItem',
    component: () => import('@/modules/Locations/pages/PLocationsItem.vue'),
    meta: {
      layout: 'default',
    },
  },
]

export default routes
