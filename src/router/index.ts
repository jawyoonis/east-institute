import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CourseList from '../views/CourseList.vue';
import CourseDetail from '../views/CourseDetail.vue';
import Technology from '@/components/curriculums/Technology.vue';
import BusinessInfo from '@/components/curriculums/BusinessInfo.vue';
import Entrepreneurship from '@/components/curriculums/Entrepreneurship.vue';
import PaymentPage from '@/views/PaymentPage.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: "/media", name: "Media", component: () => import("../views/Media.vue") },
  { path: '/waitlist', name: 'Waitlist', component: () => import('../views/Waitlist.vue') },
  { path: '/courses', name: 'Courses', component: CourseList },
  { path: '/courses/:id', name: 'CourseDetail', component: CourseDetail, props: true },
  { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') },
  { path: '/admin-dashboard', name: 'AdminDashboard', component: () => import('../views/AdminDashboard.vue') },

  { path: '/technology', name: 'Technology', component: Technology },
  { path: '/business-info', name: 'BusinessInfo', component: BusinessInfo },
  { path: '/entrepreneurship', name: 'Entrepreneurship', component: Entrepreneurship },
  { path: '/payment', name: 'Payment', component: PaymentPage },

  { path: '/curriculum', name: 'Curriculum', component: () => import('@/views/CurriculumPage.vue') },
  { path: "/apply", name: "Apply", component: () => import("../components/curriculums/Apply.vue") },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },

  // Redirect unknown routes to Home
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHashHistory(), // ✅ Switch to hash history for GitHub Pages
  routes
});

export default router;
