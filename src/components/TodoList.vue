<template>
    <q-list bordered separator class="q-pa-md">
      <q-item v-for="todo in todos" :key="todo.id" clickable class="q-pa-sm">
        <q-item-section>
          <q-item-label>{{ todo.title }}</q-item-label>
          <q-item-label caption>{{ todo.completed ? 'Completed' : 'Incomplete' }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useTodoStore } from '../stores/todoStore';
  
  const todoStore = useTodoStore();
  
  onMounted(async () => {
    await todoStore.fetchTodos();
  });
  
  const todos = computed(() => todoStore.todos);
  </script>
  
  <style scoped>
  .q-list {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .q-item:hover {
    background-color: #f5f5f5;
  }
  </style>
  