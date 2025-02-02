
// src/views/CourseDetail.vue
<template>
  <div>
    <h1>{{ course.title }}</h1>
    <p>{{ course.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CourseDetail',
  data() {
    return {
      course: {}
    };
  },
  created() {
    const courses = {
      1: { title: 'Vue.js Basics', description: 'Learn the fundamentals of Vue.js.' },
      2: { title: 'Advanced Vue.js', description: 'Master Vue.js with advanced techniques.' }
    };
    this.course = courses[this.$route.params.id] || { title: 'Course Not Found', description: '' };
  }
}
</script>