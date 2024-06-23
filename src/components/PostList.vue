<template>
    <div class="post-list">
      <q-select
        v-model="selectedUser"
        :options="userOptions"
        label="Select User"
        @update:model-value="fetchPosts"
        outlined
        class="q-ma-md"
      />
      <q-list bordered separator class="q-pa-md">
        <q-item v-for="post in posts" :key="post.id" clickable class="q-pa-sm">
          <q-item-section>
            <q-item-label>{{ post.title }}</q-item-label>
            <q-item-label caption>{{ post.body }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { usePostStore } from '../stores/postStore';
  
  const postStore = usePostStore();
  const selectedUser = ref(null);
  
  const userOptions = computed(() =>
    postStore.users.map((user) => ({ label: user.name, value: user.id }))
  );
  
  const fetchPosts = async (userId) => {
    if (userId) {
      await postStore.fetchPostsByUser(userId);
    }
  };
  
  onMounted(async () => {
    await postStore.fetchUsers();
  });
  </script>
  
  <style scoped>
  .post-list {
    max-width: 600px;
    margin: auto;
  }
  
  .q-list {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .q-item:hover {
    background-color: #f5f5f5;
  }
  </style>
  