<template>
    <div class="min-h-screen flex flex-col bg-gray-200">
      <!-- Navbar -->
      <nav class="bg-white shadow-md px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between border-b">
        <div class="flex-1 flex justify-center">
          <span class="px-6 py-2 rounded-md font-semibold bg-gray-300 text-gray-900 shadow-md">
            {{ activeTabTitle }}
          </span>
        </div>
        <button @click="toggleSidebar" class="sm:hidden text-gray-900 focus:outline-none">☰</button>
      </nav>
  
      <!-- Dashboard Layout -->
      <div class="flex flex-1">
        <!-- Sidebar -->
        <aside :class="['bg-gray-900 text-white min-h-screen p-6', isSidebarOpen ? 'block' : 'hidden', 'sm:block w-64']">
          <nav>
            <ul class="space-y-4">
              <li @click="changeTab('overview', 'Dashboard Overview')" 
                  :class="{'bg-gray-700': currentTab === 'overview'}"
                  class="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-600 transition">
                Dashboard Overview
              </li>
              <li @click="changeTab('messages', 'Contact Messages')" 
                  :class="{'bg-gray-700': currentTab === 'messages'}"
                  class="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-600 transition">
                Contact Messages
              </li>
              <li @click="changeTab('courses', 'Course Management')" 
                  :class="{'bg-gray-700': currentTab === 'courses'}"
                  class="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-600 transition">
                Course Management
              </li>
              <li @click="changeTab('curriculum', 'Manage Curriculum')" 
                  :class="{'bg-gray-700': currentTab === 'curriculum'}"
                  class="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-600 transition">
                Manage Curriculum
              </li>
              <li @click="changeTab('blog', 'Manage Blog')" 
                  :class="{'bg-gray-700': currentTab === 'blog'}"
                  class="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-600 transition">
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
        activeTabTitle: "Dashboard Overview", // Default title
        isSidebarOpen: false, // Sidebar toggle state for mobile
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      changeTab(tab, title) {
        this.currentTab = tab;
        this.activeTabTitle = title;
        this.toggleSidebar(); // Close sidebar on mobile
      },
    },
  };
  </script>
  