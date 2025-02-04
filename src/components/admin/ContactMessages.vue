<template>
   <div class="flex justify-center items-center min-h-screen bg-blue-50">
    <section>
      <h1 class="text-3xl font-bold mb-6">Contact Messages</h1>

      <!-- No Messages -->
      <div v-if="messages.length === 0" class="text-gray-500">No messages available.</div>

      <!-- Messages Table -->
      <div v-else class="overflow-x-auto">
        <table class="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Message
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="message in messages" :key="message.id">
              <td class="px-6 py-4 border-b border-gray-200 text-sm">
                {{ message.name }}
              </td>
              <td class="px-6 py-4 border-b border-gray-200 text-sm">
                {{ message.email }}
              </td>
              <td class="px-6 py-4 border-b border-gray-200 text-sm">
                {{ message.content }}
              </td>
              <td class="px-6 py-4 border-b border-gray-200 text-sm text-right">
                <button
                  @click="deleteMessage(message.id)"
                  class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
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
