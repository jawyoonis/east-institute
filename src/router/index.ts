
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CourseList from '../views/CourseList.vue';
import CourseDetail from '../views/CourseDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  // { path: '/blog', name: 'Blog', component: () => import('../views/Blog.vue') },
  { path: '/waitlist', name: 'Waitlist', component: () => import('../views/Waitlist.vue') },
  { path: '/courses', name: 'Courses', component: CourseList },
  { path: '/courses/:id', name: 'CourseDetail', component: CourseDetail, props: true },
  {path:'/Contact',name:'Contact',component: () => import('../views/Contact.vue')},
  {path:'/AdminDashboard',name:'AdminDashboard',component: () => import('../views/AdminDashboard.vue')},
  {
    path: '/curriculum',
    name: 'Curriculum',
    component: () => import('@/views/CurriculumPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
