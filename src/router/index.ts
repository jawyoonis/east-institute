
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CourseList from '../views/CourseList.vue';
import CourseDetail from '../views/CourseDetail.vue';
import Technology from '@/components/curriculums/Technology.vue';
import BusinessInfo from '@/components/curriculums/BusinessInfo.vue';
import Entrepreneurship from '@/components/curriculums/Entrepreneurship.vue';
import PaymentPage from '@/views/PaymentPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: "/blog", name: "BlogView", component: () => import("../views/BlogView.vue") },
  { path: '/waitlist', name: 'Waitlist', component: () => import('../views/Waitlist.vue') },
  { path: '/courses', name: 'Courses', component: CourseList },
  { path: '/courses/:id', name: 'CourseDetail', component: CourseDetail, props: true },
  {path:'/Contact',name:'Contact',component: () => import('../views/Contact.vue')},
  {path:'/AdminDashboard',name:'AdminDashboard',component: () => import('../views/AdminDashboard.vue')},

  { path: '/technology', name: 'Technology', component: Technology },
  { path: '/business-info', name: 'BusinessInfo', component: BusinessInfo },
  { path: '/entrepreneurship', name: 'Entrepreneurship', component: Entrepreneurship },
  { path: '/payment', name: 'Payment', component: PaymentPage },

  {
    path: '/curriculum',
    name: 'Curriculum',
    component: () => import('@/views/CurriculumPage.vue'),
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
