<template>
  <div class="min-h-screen bg-white py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900">Education Media & News</h1>
        <p class="text-lg text-gray-600 mt-3">
          Stay informed with the latest updates in online education, student achievements, and e-learning innovations.
        </p>
      </div>

      <!-- Category Filters -->
      <div class="flex justify-center space-x-4 mb-10">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-4 py-2 border border-gray-400 text-gray-900 rounded-md hover:bg-gray-200 transition"
          :class="{ 'bg-black text-white': selectedCategory === category }"
        >
          {{ category }}
        </button>
      </div>

      <!-- No Media Available -->
      <div v-if="filteredArticles.length === 0" class="text-center text-gray-600">
        No articles available in this category.
      </div>

      <!-- Media Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="article in filteredArticles" :key="article.id" class="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
          <div class="p-6">
            <span class="text-sm text-blue-600 font-semibold">{{ article.category }}</span>
            <h2 class="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300 cursor-pointer">
              {{ article.title }}
            </h2>
            <p class="text-gray-500 text-sm mt-2">Published on {{ article.date }}</p>
            <p class="text-gray-700 mt-4 leading-relaxed">
              {{ article.content.length > 120 ? article.content.substring(0, 120) + "..." : article.content }}
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
  name: "EducationMedia",
  data() {
    return {
      selectedCategory: "All",
      categories: ["All", "Latest News", "Success Stories", "E-Learning Updates"],
      articles: [
        {
          id: 1,
          title: "The Future of Online Learning in Africa",
          category: "E-Learning Updates",
          date: "January 15, 2024",
          content:
            "How technology is transforming education for students in East Africa. Discover how remote learning is bridging the education gap.",
        },
        {
          id: 2,
          title: "East College Partners with Global Universities",
          category: "Latest News",
          date: "February 10, 2024",
          content:
            "We are excited to announce our new partnerships with top universities to enhance our curriculum and provide accredited online courses.",
        },
        {
          id: 3,
          title: "Success Story: From Virtual Classrooms to Global Jobs",
          category: "Success Stories",
          date: "March 5, 2024",
          content:
            "Meet Ayaan, a graduate of our STEM program who secured a remote job at a global tech company after completing our AI & Data Science course.",
        },
        {
          id: 4,
          title: "New Business & Entrepreneurship Course Launch",
          category: "E-Learning Updates",
          date: "March 20, 2024",
          content:
            "A new interactive course on business and entrepreneurship is now available! Learn from industry leaders and build your startup with guidance.",
        },
        {
          id: 5,
          title: "Bridging the Digital Divide: Our Expansion Plans",
          category: "Latest News",
          date: "April 5, 2024",
          content:
            "We are expanding our learning platforms to provide free and affordable online education to even more students in underserved communities.",
        }
      ],
    };
  },
  computed: {
    filteredArticles() {
      if (this.selectedCategory === "All") {
        return this.articles;
      }
      return this.articles.filter(article => article.category === this.selectedCategory);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
