// src/views/CourseList.vue
<template>
  <div>
    <h1>Courses</h1>
    <ul>
      <li v-for="course in courses" :key="course.id">
        <router-link :to="`/courses/${course.id}`">{{ course.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CourseList',
  data() {
    return {
      courses: [
        { id: 1, title: 'Vue.js Basics' },
        { id: 2, title: 'Advanced Vue.js' }
      ]
    };
  }
}
</script>