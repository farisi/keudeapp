import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import Home from '@/views/Home.vue'
import Customers from '@/views/Customers.vue'
import Products from '@/views/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
	    path: '/',
	    component:AppLayout,
	    children: [
	      {
	        path: '/',
	        component: Home,
	        name: 'Home',
	      },
	      {
	        path: 'customers',
	        component: Customers,
	        name: 'Customers',
	      },
	      {
	        path: 'products',
	        component: Products,
	        name: 'Products',
	      },
	   ],
  },
  ]
})

export default router
