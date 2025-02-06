<template>
    <div class="flex justify-center items-center min-h-screen bg-white">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>

        <!-- Our Mission -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p class="text-gray-700 leading-relaxed">
            East Institute is a nonprofit organization dedicated to providing accessible, high-quality online education
            for students in East Africa. Our goal is to bridge the education gap by using technology to
            deliver impactful learning experiences. We focus on STEM, business, and entrepreneurship, empowering students
            to build a better future.
          </p>
        </section>

        <!-- Our Story -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p class="text-gray-700 leading-relaxed">
            Founded in 2023, East Institute started as a volunteer-led initiative aimed at offering free and affordable education
            to students in underserved communities. Over time, we expanded to fully online courses while also establishing
            learning centers in key locations across East Africa to support both virtual and in-person learning.
          </p>
        </section>

        <!-- Our Team -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="team-member bg-white p-6 rounded-lg shadow text-center">
              <h3 class="text-xl font-semibold text-gray-900">John Doe</h3>
              <p class="text-gray-600">Founder & CEO</p>
            </div>
            <div class="team-member bg-white p-6 rounded-lg shadow text-center">
              <h3 class="text-xl font-semibold text-gray-900">Jane Smith</h3>
              <p class="text-gray-600">Head of Curriculum</p>
            </div>
            <div class="team-member bg-white p-6 rounded-lg shadow text-center">
              <h3 class="text-xl font-semibold text-gray-900">Ahmed Yusuf</h3>
              <p class="text-gray-600">Technology Lead</p>
            </div>
          </div>
        </section>

        <!-- Our Courses -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Curriculum</h2>
          <p class="text-gray-700 leading-relaxed">
            We offer a diverse curriculum focused on STEM, business, entrepreneurship, and technology.
            Our courses are designed to be practical and industry-relevant, helping students gain
            real-world skills that prepare them for higher education and job opportunities.
          </p>
        </section>

        <!-- Testimonials -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">What Students Say</h2>
          <div class="bg-white p-6 rounded-lg shadow mb-6">
            <p class="text-gray-700 italic">
              "East Institute's online courses helped me learn coding, and now I work in tech.
              The mentorship and structured courses gave me the confidence to succeed."
            </p>
            <p class="text-gray-900 font-semibold mt-2">Fatima Mohammed, Kenya</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <p class="text-gray-700 italic">
              "Through the business courses, I started my own company.
              The combination of online lessons and local learning centers made all the difference."
            </p>
            <p class="text-gray-900 font-semibold mt-2">Samuel Otieno, Uganda</p>
          </div>
        </section>

        <!-- Contact Us -->
        <section>
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p class="text-gray-700 leading-relaxed">
            We’d love to hear from you. Reach out to us at
            <a href="mailto:info@eastinstitute.org" class="text-blue-500">info@eastinstitute.org</a>
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
