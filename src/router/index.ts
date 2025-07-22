import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
// auth store
import { useAuthStore } from '@/stores/authStore'  // 👈 Import auth store
import { storeToRefs } from 'pinia'

// layouts
import WebsiteLayout from '@/layouts/WebsiteLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

// views
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

// auth
import RegisterView from '@/auth/RegisterView.vue'
import LoginView from '@/auth/LoginView.vue'

// admin views
import AdminDashboardView from '@/admin_views/AdminDashboardView.vue'
import AdminListView from '@/admin_views/AdminListView.vue'
import VehicleHistoryView from '@/admin_views/AdminVehicleHistoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WebsiteLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView
        },
        {
          path: '/login',
          name: 'login',
          component: LoginView
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      meta: { requiresAuth: true }, // 👈 Meta field
      children: [
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: AdminDashboardView
        },
        {
          path: 'vehicles',
          name: 'admin-vehicles',
          component: AdminListView
        },
        {
          path: '/admin/vehicle/:id/history',
          name: 'vehicle-history',
          component: VehicleHistoryView,
          props: true // 👈 Pass route params as props
        }

      ]
    }

  ],
})

// ✅ Navigation Guard
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const auth = useAuthStore()
  const { isAuthenticated } = storeToRefs(auth)

  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    if (!isAuthenticated.value) {
      next({ name: 'login', query: { redirect: to.fullPath } }) // Save intended path
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
