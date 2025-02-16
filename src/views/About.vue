<template>
  <div class="min-h-screen bg-white flex justify-center items-center">
    <div class="max-w-6xl w-full mx-auto px-6 sm:px-8 lg:px-10 py-16">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold text-gray-900 leading-tight">About Us</h1>
        <p class="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
          Empowering students with high-quality, accessible education in technology, business, and entrepreneurship.
        </p>
      </div>

      <!-- Our Mission -->
      <section class="mb-12">
        <h2 class="text-3xl font-semibold text-gray-800 border-l-4 border-gray-900 pl-4">Our Mission</h2>
        <p class="text-gray-700 text-lg leading-relaxed mt-3">
          East College is a nonprofit organization committed to providing accessible, high-quality online education
          to students across East Africa. Our goal is to bridge the education gap through technology-driven learning,
          offering students the tools they need to succeed in STEM, business, and entrepreneurship.
        </p>
      </section>

      <!-- Our Story -->
      <section class="mb-12">
        <h2 class="text-3xl font-semibold text-gray-800 border-l-4 border-gray-900 pl-4">Our Story</h2>
        <p class="text-gray-700 text-lg leading-relaxed mt-3">
          Founded in 2023, East College began as a volunteer initiative to provide affordable education to students
          in underserved communities. Over time, we expanded to a fully online learning platform, with local support
          centers in major East African cities, ensuring both digital and in-person learning opportunities.
        </p>
      </section>

      <!-- Our Team -->
      <section class="mb-12">
        <h2 class="text-3xl font-semibold text-gray-800 border-l-4 border-gray-900 pl-4">Our Leadership Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-xl font-semibold text-gray-900">Abdi Aar</h3>
            <p class="text-gray-600 text-sm">Founder & CEO</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-xl font-semibold text-gray-900">Mohamed Gargaar</h3>
            <p class="text-gray-600 text-sm">Head of Curriculum</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-xl font-semibold text-gray-900">Ahmed Yusuf</h3>
            <p class="text-gray-600 text-sm">Technology Lead</p>
          </div>
        </div>
      </section>

      <!-- Our Courses -->
      <section class="mb-12">
        <h2 class="text-3xl font-semibold text-gray-800 border-l-4 border-gray-900 pl-4">Our Curriculum</h2>
        <p class="text-gray-700 text-lg leading-relaxed mt-3">
          Our programs focus on **STEM, business, and entrepreneurship**, equipping students with in-demand skills.
          We provide structured, **industry-relevant** courses that prepare learners for careers in technology,
          leadership, and digital innovation.
        </p>
      </section>

      <!-- Student Testimonials -->
      <section class="mb-12">
        <h2 class="text-3xl font-semibold text-gray-800 border-l-4 border-gray-900 pl-4">What Students Say</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          <div class="bg-gray-50 p-6 rounded-lg shadow">
            <p class="text-gray-700 italic">
              "East College's online courses helped me learn coding, and now I work in tech.
              The mentorship and structured courses gave me the confidence to succeed."
            </p>
            <p class="text-gray-900 font-semibold mt-3">— Fatima Mohammed, Kenya</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg shadow">
            <p class="text-gray-700 italic">
              "Through the business courses, I started my own company.
              The combination of online lessons and local learning centers made all the difference."
            </p>
            <p class="text-gray-900 font-semibold mt-3">— Samuel Otieno, Uganda</p>
          </div>
        </div>
      </section>

      <!-- Contact Us -->
      <section>
        <h2 class="text-3xl font-semibold text-gray-800 border-l-4 border-gray-900 pl-4">Contact Us</h2>
        <p class="text-gray-700 text-lg leading-relaxed mt-3">
          We’d love to hear from you. Reach out to us at
          <a href="mailto:info@eastcollege.org" class="text-blue-500 font-medium">eastcollege.org</a>
          or follow us on social media.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
