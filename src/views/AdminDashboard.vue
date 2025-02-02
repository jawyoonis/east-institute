<template>
    <div class="min-h-screen flex flex-col bg-gray-200">
      <!-- Navbar -->
      <nav class="bg-white shadow-md px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between border-b">
        <h1 class="text-xl font-bold text-gray-900">Admin Dashboard</h1>
        <button @click="toggleMenu" class="sm:hidden text-gray-900 focus:outline-none">☰</button>
      </nav>
  
      <!-- Sub-navbar -->
      <div class="bg-gray-300 py-3 shadow-inner">
        <div class="max-w-7xl mx-auto flex justify-center space-x-6">
          <button @click="currentTab = 'overview'" class="px-6 py-2 rounded-md font-semibold text-gray-900 hover:bg-gray-400 transition">
            Overview
          </button>
          <button @click="currentTab = 'messages'" class="px-6 py-2 rounded-md font-semibold text-gray-900 hover:bg-gray-400 transition">
            Contact Messages
          </button>
          <button @click="currentTab = 'courses'" class="px-6 py-2 rounded-md font-semibold text-gray-900 hover:bg-gray-400 transition">
            Course Management
          </button>
          <button @click="currentTab = 'curriculum'" class="px-6 py-2 rounded-md font-semibold text-gray-900 hover:bg-gray-400 transition">
            Manage Curriculum
          </button>
          <button @click="currentTab = 'blog'" class="px-6 py-2 rounded-md font-semibold text-gray-900 hover:bg-gray-400 transition">
            Manage Blog
          </button>
        </div>
      </div>
  
      <!-- Dashboard Layout -->
      <div class="flex flex-1">
        <!-- Sidebar -->
        <aside class="w-64 bg-blue-900 text-white min-h-screen p-6 hidden sm:block">
          <nav>
            <ul class="space-y-4">
              <li @click="currentTab = 'overview'" class="cursor-pointer hover:text-gray-300">Dashboard Overview</li>
              <li @click="currentTab = 'messages'" class="cursor-pointer hover:text-gray-300">Contact Messages</li>
              <li @click="currentTab = 'courses'" class="cursor-pointer hover:text-gray-300">Course Management</li>
              <li @click="currentTab = 'curriculum'" class="cursor-pointer hover:text-gray-300">Manage Curriculum</li>
              <li @click="currentTab = 'blog'" class="cursor-pointer hover:text-gray-300">Manage Blog</li>
            </ul>
          </nav>
        </aside>
  
        <!-- Main Content -->
        <main class="flex-1 p-8 bg-white shadow-md rounded-lg">
          <Overview v-if="currentTab === 'overview'" />
          <ContactMessages v-if="currentTab === 'messages'" />
          <CourseManagement v-if="currentTab === 'courses'" />
          <CurriculumManagement v-if="currentTab === 'curriculum'" />
          <BlogManagement v-if="currentTab === 'blog'" />
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import Overview from '@/components/admin/Overview.vue';
  import ContactMessages from '@/components/admin/ContactMessages.vue';
  import CourseManagement from '@/components/admin/CourseManagement.vue';
  import CurriculumManagement from '@/components/admin/CurriculumManagement.vue';
  import BlogManagement from '@/views/Blog.vue';
  
  export default {
    name: 'AdminDashboard',
    components: {
      Overview,
      ContactMessages,
      CourseManagement,
      CurriculumManagement,
      BlogManagement,
    },
    data() {
      return {
        currentTab: 'overview', // Default tab
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  