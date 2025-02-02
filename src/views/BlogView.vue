<template>
    <div class="min-h-screen bg-gray-100 py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold text-center text-gray-900 mb-8">📖 East Institute Blog</h1>
        <p class="text-center text-lg text-gray-700 mb-10">
          Stay updated with the latest news, programs, and impact stories from East Institute.
        </p>
  
        <div v-if="blogs.length === 0" class="text-center text-gray-600">No blog posts available.</div>
  
        <div v-for="blog in blogs" :key="blog.id" class="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 class="text-2xl font-bold text-gray-800">{{ blog.title }}</h2>
          <p class="text-gray-600 text-sm mt-1">Published on {{ blog.date }}</p>
          <p class="text-gray-700 mt-4">{{ blog.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BlogView",
    data() {
      return {
        blogs: [
          {
            id: 1,
            title: "Empowering the Next Generation Through Digital Learning",
            date: "January 15, 2024",
            content: "At East Institute, we are committed to using technology to bridge the educational gap in Africa. Our latest initiatives focus on equipping students with STEM, business, and entrepreneurial skills for the future."
          },
          {
            id: 2,
            title: "Expanding Our Reach in East Africa",
            date: "February 10, 2024",
            content: "We are excited to announce new learning centers opening in Nairobi and Addis Ababa, providing students with access to digital education and mentorship programs."
          },
          {
            id: 3,
            title: "Scholarship Programs: Making Education Accessible",
            date: "March 5, 2024",
            content: "Through our new scholarship programs, we aim to support underprivileged students by offering full and partial scholarships for our online courses and physical training sessions."
          },
          {
            id: 4,
            title: "How AI and Technology are Transforming Education",
            date: "March 20, 2024",
            content: "Artificial Intelligence (AI) is revolutionizing the education sector. At East Institute, we are integrating AI-driven learning modules to provide personalized learning experiences for students."
          },
          {
            id: 5,
            title: "Our Partnership with Global Educational Institutions",
            date: "April 5, 2024",
            content: "We have partnered with top universities and organizations worldwide to enhance our curriculum and provide internationally recognized certifications for our students."
          }
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  