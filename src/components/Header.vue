<template>
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat @click="navigateTo('/todos')" class="text-white">Todos</q-btn>
        <q-btn flat @click="navigateTo('/posts')" class="text-white">Posts</q-btn>
        <q-btn flat @click="navigateTo('/albums')" class="text-white">Albums</q-btn>
      </q-toolbar>
    </q-header>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  };
  </script>
  
  <style scoped>
  .q-header {
    background-color: #1976D2;
    color: white;
  }
  .q-btn {
    color: white;
  }
  </style>
  