<template>
  <div class="flex justify-center items-center min-h-screen bg-white">
    <div class="container mx-auto py-8 px-4">
      <h1 class="text-4xl font-extrabold mb-6 text-center text-gray-900">Blog Management</h1>

      <!-- Blog Post Form -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">{{ isEditing ? '✏️ Edit Post' : '🆕 Create New Post' }}</h2>
        <form @submit.prevent="isEditing ? updatePost() : createPost()" class="bg-gray-50 p-6 rounded-lg shadow-md">
          <div class="mb-4">
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              v-model="form.title"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the post title"
            />
          </div>
          <div class="mb-4">
            <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              v-model="form.content"
              rows="5"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your post content here..."
            ></textarea>
          </div>
          <div class="flex items-center">
            <button
              type="submit"
              class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              {{ isEditing ? 'Update Post' : 'Publish Post' }}
            </button>
            <button
              type="button"
              v-if="isEditing"
              @click="cancelEdit"
              class="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <!-- Blog Posts List -->
      <div v-if="posts.length" class="space-y-6">
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold text-gray-800">{{ post.title }}</h3>
          <p class="text-gray-600 mt-2">{{ post.content }}</p>
          <div class="mt-4 flex space-x-4">
            <button
              @click="editPost(post)"
              class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
            >
              Edit
            </button>
            <button
              @click="deletePost(post.id)"
              class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div v-else class="text-center text-gray-500">
        No blog posts available. Start by creating a new post.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      posts: [], // Array to store blog posts
      form: {
        id: null,
        title: '',
        content: '',
      },
      isEditing: false,
    };
  },
  methods: {
    createPost() {
      // Assign a unique ID to the new post
      const newPost = { ...this.form, id: Date.now() };
      // Add the new post to the posts array
      this.posts.push(newPost);
      // Reset the form
      this.resetForm();
    },
    editPost(post) {
      // Populate the form with the selected post's data
      this.form = { ...post };
      this.isEditing = true;
    },
    updatePost() {
      // Find the index of the post to be updated
      const index = this.posts.findIndex((p) => p.id === this.form.id);
      if (index !== -1) {
        // Update the post in the posts array
        this.posts.splice(index, 1, { ...this.form });
        // Reset the form
        this.resetForm();
        this.isEditing = false;
      }
    },
    deletePost(postId) {
      // Filter out the post to be deleted
      this.posts = this.posts.filter((post) => post.id !== postId);
    },
    cancelEdit() {
      // Reset the form and exit edit mode
      this.resetForm();
      this.isEditing = false;
    },
    resetForm() {
      // Clear the form fields
      this.form = {
        id: null,
        title: '',
        content: '',
      };
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
