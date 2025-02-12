<template>
  <div class="min-h-screen flex justify-center items-center bg-white px-6 py-12">
    <div class="w-full max-w-lg bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-6">Apply Now</h2>

      <!-- Application Form -->
      <form @submit.prevent="submitApplication">
        <!-- Personal Information -->
        <div class="mb-4">
          <label for="fullName" class="block text-gray-700 font-semibold">Full Name</label>
          <input type="text" id="fullName" v-model="form.fullName" required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold">Email Address</label>
          <input type="email" id="email" v-model="form.email" required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="mb-4">
          <label for="phone" class="block text-gray-700 font-semibold">Phone Number</label>
          <input type="tel" id="phone" v-model="form.phone" required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <!-- Curriculum Plan Selection -->
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold">Select a Plan</label>
          <select v-model="form.selectedPlan" @change="updateCourses" required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled selected>Select a plan</option>
            <option value="Monthly">Monthly Plan</option>
            <option value="Annual">Annual Plan</option>
          </select>
        </div>

        <!-- Course Selection (Dynamically Updated) -->
        <div v-if="form.selectedPlan" class="mb-4">
          <label class="block text-gray-700 font-semibold">Select Courses</label>
          <div v-for="course in availableCourses" :key="course.id" class="flex items-center space-x-2">
            <input type="checkbox" :id="course.id" v-model="form.selectedCourses" :value="course.name" class="accent-blue-500">
            <label :for="course.id" class="text-gray-700">{{ course.name }}</label>
          </div>
        </div>

        <!-- File Uploads -->
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold">Upload Resume (PDF/DOC)</label>
          <input type="file" accept=".pdf,.doc,.docx" @change="handleFileUpload($event, 'resume')" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-semibold">Upload Certifications (Optional)</label>
          <input type="file" accept=".pdf,.jpg,.png" multiple @change="handleFileUpload($event, 'certifications')" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-semibold">Upload Educational Documents (Optional)</label>
          <input type="file" accept=".pdf,.jpg,.png" multiple @change="handleFileUpload($event, 'educationDocs')" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <!-- Submit Button -->
        <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Submit Application
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Apply",
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        phone: "",
        selectedPlan: "",
        selectedCourses: [],
        resume: null,
        certifications: [],
        educationDocs: [],
      },
      courses: {
        Monthly: [
          { id: 1, name: "Introduction to Coding" },
          { id: 2, name: "Digital Marketing Basics" },
          { id: 3, name: "Business Fundamentals" },
          { id: 4, name: "Public Speaking & Communication" },
        ],
        Annual: [
          { id: 5, name: "Advanced Software Development" },
          { id: 6, name: "Data Science & Machine Learning" },
          { id: 7, name: "Cybersecurity & Ethical Hacking" },
          { id: 8, name: "Full-Stack Web Development" },
          { id: 9, name: "Leadership & Strategic Management" },
          { id: 10, name: "Entrepreneurship & Business Growth" },
        ],
      },
      availableCourses: [], // Updates based on selected plan
    };
  },
  methods: {
    updateCourses() {
      this.availableCourses = this.courses[this.form.selectedPlan] || [];
      this.form.selectedCourses = []; // Reset selected courses when switching plans
    },
    handleFileUpload(event, field) {
      if (field === "resume") {
        this.form.resume = event.target.files[0]; // Store single file
      } else {
        this.form[field] = Array.from(event.target.files); // Store multiple files
      }
    },
    submitApplication() {
      console.log("Application Submitted:", this.form);
      alert("Your application has been submitted successfully!");
      this.resetForm();
    },
    resetForm() {
      this.form = {
        fullName: "",
        email: "",
        phone: "",
        selectedPlan: "",
        selectedCourses: [],
        resume: null,
        certifications: [],
        educationDocs: [],
      };
      this.availableCourses = [];
    },
  },
};
</script>
