<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-50 px-6 py-12">
    <div class="w-full max-w-2xl bg-white p-10 rounded-lg shadow-xl">
      <h2 class="text-4xl font-extrabold text-gray-900 text-center mb-6">Apply Now</h2>

      <!-- Application Form -->
      <form @submit.prevent="submitApplication">
        <!-- Personal Information Section -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>

          <label for="fullName" class="block text-gray-700 font-medium">Full Name</label>
          <input type="text" id="fullName" v-model="form.fullName" required class="input-field">

          <label for="email" class="block text-gray-700 font-medium mt-4">Email Address</label>
          <input type="email" id="email" v-model="form.email" required class="input-field">

          <label for="phone" class="block text-gray-700 font-medium mt-4">Phone Number</label>
          <input type="tel" id="phone" v-model="form.phone" required class="input-field">
        </div>

        <!-- Curriculum Plan Selection -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Curriculum Plan</h3>

          <label class="block text-gray-700 font-medium">Select a Plan</label>
          <select v-model="form.selectedPlan" @change="updateCourses" required class="input-field">
            <option value="" disabled selected>Select a plan</option>
            <option value="Monthly">Monthly Plan</option>
            <option value="Annual">Annual Plan</option>
          </select>
        </div>

        <!-- Course Selection (Dynamically Updated) -->
        <div v-if="form.selectedPlan" class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Select Courses</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="course in availableCourses" :key="course.id" class="flex items-center space-x-2">
              <input type="checkbox" :id="course.id" v-model="form.selectedCourses" :value="course.name" class="accent-blue-500">
              <label :for="course.id" class="text-gray-700">{{ course.name }}</label>
            </div>
          </div>
        </div>

        <!-- File Uploads -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Upload Documents</h3>

          <label class="block text-gray-700 font-medium">Resume (PDF/DOC)</label>
          <input type="file" accept=".pdf,.doc,.docx" @change="handleFileUpload($event, 'resume')" class="input-file">

          <label class="block text-gray-700 font-medium mt-4">Certifications (Optional)</label>
          <input type="file" accept=".pdf,.jpg,.png" multiple @change="handleFileUpload($event, 'certifications')" class="input-file">

          <label class="block text-gray-700 font-medium mt-4">Educational Documents (Optional)</label>
          <input type="file" accept=".pdf,.jpg,.png" multiple @change="handleFileUpload($event, 'educationDocs')" class="input-file">
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-btn">Submit Application</button>
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

<style scoped>
/* General Form Styles */
.input-field {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  margin-top: 4px;
  outline: none;
  transition: border 0.3s ease-in-out;
}
.input-field:focus {
  border-color: #2563eb;
  box-shadow: 0 0 5px rgba(37, 99, 235, 0.5);
}

/* File Upload Styling */
.input-file {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: #f9fafb;
  cursor: pointer;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 14px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
}
.submit-btn:hover {
  background-color: #1d4ed8;
}
</style>
