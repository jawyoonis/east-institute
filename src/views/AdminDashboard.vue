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
          <button @click="currentTab = 'overview'" 
            class="px-6 py-2 rounded-md font-semibold text-gray-900 hover:bg-gray-400 transition">
            Overview
          </button>
          <button @click="currentTab = 'messages'" 
            class="px-6 py-2 rounded-md font-semibold text-gray-900 hover:bg-gray-400 transition">
            Contact Messages
          </button>
          <button @click="currentTab = 'curriculum'" 
            class="px-6 py-2 rounded-md font-semibold text-gray-900 hover:bg-gray-400 transition">
            Manage Curriculum
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
              <li @click="currentTab = 'curriculum'" class="cursor-pointer hover:text-gray-300">Manage Curriculum</li>
            </ul>
          </nav>
        </aside>
  
        <!-- Main Content -->
        <main class="flex-1 p-8 bg-white shadow-md rounded-lg">
          <!-- Dashboard Overview -->
          <section v-if="currentTab === 'overview'">
            <h1 class="text-3xl font-bold mb-6">Dashboard Overview</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-blue-500 text-white p-6 rounded-lg shadow">
                <h2 class="text-xl font-semibold">Total Students</h2>
                <p class="text-3xl font-bold">5,120</p>
              </div>
              <div class="bg-green-500 text-white p-6 rounded-lg shadow">
                <h2 class="text-xl font-semibold">Total Courses</h2>
                <p class="text-3xl font-bold">120</p>
              </div>
              <div class="bg-yellow-500 text-white p-6 rounded-lg shadow">
                <h2 class="text-xl font-semibold">Messages Received</h2>
                <p class="text-3xl font-bold">350</p>
              </div>
            </div>
          </section>
  
          <!-- Contact Messages -->
          <section v-if="currentTab === 'messages'">
            <h1 class="text-3xl font-bold mb-6">Contact Messages</h1>
            <div v-for="message in messages" :key="message.id" class="bg-gray-50 p-4 rounded-lg shadow mb-4">
              <p class="text-gray-900 font-semibold">{{ message.name }} ({{ message.email }})</p>
              <p class="text-gray-700 mt-2">{{ message.content }}</p>
            </div>
          </section>
  
          <!-- Manage Curriculum -->
          <section v-if="currentTab === 'curriculum'">
            <h1 class="text-3xl font-bold mb-6">Manage Curriculum</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="course in curriculum" :key="course.id" class="bg-gray-50 p-6 rounded-lg shadow">
                <h2 class="text-xl font-semibold text-blue-800">{{ course.title }}</h2>
                <p class="text-gray-600 mt-2">{{ course.description }}</p>
                <button class="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                  Remove
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
    data() {
      return {
        currentTab: 'overview', // Default tab
        messages: [
          { id: 1, name: 'Alice Johnson', email: 'alice@example.com', content: 'I love the curriculum, but I have a question about enrollment.' },
          { id: 2, name: 'Mohammed Ahmed', email: 'mohammed@example.com', content: 'Do you offer in-person workshops as well?' },
        ],
        curriculum: [
          { id: 1, title: 'STEM Program', description: 'Covers science, technology, engineering, and math courses.' },
          { id: 2, title: 'Business & Entrepreneurship', description: 'Teaches financial literacy, management, and entrepreneurship.' },
          { id: 3, title: 'Health & Medicine', description: 'Prepares students for medical careers with biology and healthcare courses.' },
        ],
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  