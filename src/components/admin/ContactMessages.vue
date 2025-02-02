<template>
    <section>
      <h1 class="text-3xl font-bold mb-6">Contact Messages</h1>
      
      <!-- No Messages -->
      <div v-if="messages.length === 0" class="text-gray-500">No messages available.</div>
  
      <!-- Messages List -->
      <div v-for="message in messages" :key="message.id" class="bg-gray-50 p-4 rounded-lg shadow mb-4">
        <p class="text-gray-900 font-semibold">{{ message.name }} ({{ message.email }})</p>
        <p class="text-gray-700 mt-2">{{ message.content }}</p>
        <button @click="deleteMessage(message.id)" class="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
          Delete
        </button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [
          { id: 1, name: 'Alice Johnson', email: 'alice@example.com', content: 'I love the curriculum, but I have a question about enrollment.' },
          { id: 2, name: 'Mohammed Ahmed', email: 'mohammed@example.com', content: 'Do you offer in-person workshops as well?' },
        ],
      };
    },
    methods: {
      deleteMessage(messageId) {
        this.messages = this.messages.filter(message => message.id !== messageId);
      },
    },
  };
  </script>
  