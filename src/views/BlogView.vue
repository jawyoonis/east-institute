<template>
  <div class="min-h-screen bg-white py-12">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold text-gray-900">East Institute Blog</h1>
        <p class="text-lg text-gray-600 mt-3">
          Stay updated with the latest news, programs, and impact stories from East Institute.
        </p>
      </div>

      <!-- No Blogs Available -->
      <div v-if="blogs.length === 0" class="text-center text-gray-600">No blog posts available.</div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="blog in blogs" :key="blog.id" class="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300 cursor-pointer">
              {{ blog.title }}
            </h2>
            <p class="text-gray-500 text-sm mt-2">Published on {{ blog.date }}</p>
            <p class="text-gray-700 mt-4 leading-relaxed">
              {{ blog.content.length > 150 ? blog.content.substring(0, 150) + "..." : blog.content }}
            </p>
            <button class="mt-4 text-blue-600 font-semibold hover:underline">Read More</button>
          </div>
        </div>
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
          content:
            "At East Institute, we are committed to using technology to bridge the educational gap in Africa. Our latest initiatives focus on equipping students with STEM, business, and entrepreneurial skills for the future.",
        },
        {
          id: 2,
          title: "Expanding Our Reach in East Africa",
          date: "February 10, 2024",
          content:
            "We are excited to announce new learning centers opening in Nairobi and Addis Ababa, providing students with access to digital education and mentorship programs.",
        },
        {
          id: 3,
          title: "Scholarship Programs: Making Education Accessible",
          date: "March 5, 2024",
          content:
            "Through our new scholarship programs, we aim to support underprivileged students by offering full and partial scholarships for our online courses and physical training sessions.",
        },
        {
          id: 4,
          title: "How AI and Technology are Transforming Education",
          date: "March 20, 2024",
          content:
            "Artificial Intelligence (AI) is revolutionizing the education sector. At East Institute, we are integrating AI-driven learning modules to provide personalized learning experiences for students.",
        },
        {
          id: 5,
          title: "Our Partnership with Global Educational Institutions",
          date: "April 5, 2024",
          content:
            "We have partnered with top universities and organizations worldwide to enhance our curriculum and provide internationally recognized certifications for our students.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
