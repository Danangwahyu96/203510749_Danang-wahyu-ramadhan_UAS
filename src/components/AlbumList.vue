<template>
    <q-list bordered separator class="q-pa-md">
      <q-item v-for="album in albums" :key="album.id" clickable @click="$router.push(`/albums/${album.id}`)" class="q-pa-sm">
        <q-item-section>
          <q-item-label>{{ album.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useAlbumStore } from '../stores/albumStore';
  import { useRouter } from 'vue-router';
  
  const albumStore = useAlbumStore();
  const router = useRouter();
  
  onMounted(async () => {
    await albumStore.fetchAlbums();
  });
  
  const albums = computed(() => albumStore.albums);
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
  