// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CartView from '../views/CartView.vue';
import ContactView from '../views/ContactView.vue';
import logInView from '../views/LogInView.vue'; // นำเข้าหน้า Log In
import RegisterView from '../views/RegisterView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/login', name: 'Login', component: logInView }, // เพิ่มเส้นทางสำหรับหน้า Log In
  { path: '/register', name: 'Register', component: RegisterView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
