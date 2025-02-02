<template>
    <div class="min-h-screen flex flex-col bg-gray-200">
      <!-- Navbar -->
      <nav class="bg-white shadow-md px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between border-b">
        <h1 class="text-xl font-bold text-gray-900">Admin Dashboard</h1>
        <button @click="toggleSidebar" class="sm:hidden text-gray-900 focus:outline-none">☰</button>
      </nav>
  
      <!-- Sub-navbar (Tabs) with New Background Color -->
      <div class="bg-blue-800 py-3 shadow-inner">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6">
          <button 
            @click="currentTab = 'overview'" 
            class="px-4 py-2 text-sm sm:text-base rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 transition">
            Overview
          </button>
          <button 
            @click="currentTab = 'messages'" 
            class="px-4 py-2 text-sm sm:text-base rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 transition">
            Contact Messages
          </button>
          <button 
            @click="currentTab = 'courses'" 
            class="px-4 py-2 text-sm sm:text-base rounded-md font-semibold text-white bg-purple-600 hover:bg-purple-700 transition">
            Course Management
          </button>
          <button 
            @click="currentTab = 'curriculum'" 
            class="px-4 py-2 text-sm sm:text-base rounded-md font-semibold text-white bg-yellow-600 hover:bg-yellow-700 transition">
            Manage Curriculum
          </button>
          <button 
            @click="currentTab = 'blog'" 
            class="px-4 py-2 text-sm sm:text-base rounded-md font-semibold text-white bg-red-600 hover:bg-red-700 transition">
            Manage Blog
          </button>
        </div>
      </div>
  
      <!-- Dashboard Layout -->
      <div class="flex flex-1">
        <!-- Sidebar -->
        <aside :class="['bg-gray-900 text-white min-h-screen p-6', isSidebarOpen ? 'block' : 'hidden', 'sm:block w-64']">
        <nav>
            <ul class="space-y-4">
            <li @click="currentTab = 'overview'; toggleSidebar()" 
                class="cursor-pointer px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">
                Dashboard Overview
            </li>
            <li @click="currentTab = 'messages'; toggleSidebar()" 
                class="cursor-pointer px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">
                Contact Messages
            </li>
            <li @click="currentTab = 'courses'; toggleSidebar()" 
                class="cursor-pointer px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">
                Course Management
            </li>
            <li @click="currentTab = 'curriculum'; toggleSidebar()" 
                class="cursor-pointer px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">
                Manage Curriculum
            </li>
            <li @click="currentTab = 'blog'; toggleSidebar()" 
                class="cursor-pointer px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">
                Manage Blog
            </li>
            </ul>
        </nav>
        </aside>


  
        <!-- Main Content -->
        <main class="flex-1 p-4 sm:p-6 md:p-8 bg-white shadow-md rounded-lg">
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
  import BlogManagement from '@/components/admin/Blog.vue';
  
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
        isSidebarOpen: false, // Sidebar toggle state for mobile
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
    },
  };
  </script>
  