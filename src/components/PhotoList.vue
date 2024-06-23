<template>
    <q-list bordered separator class="q-pa-md">
      <q-item v-for="photo in photos" :key="photo.id" clickable @click="viewPhoto(photo.url)" class="q-pa-sm">
        <q-item-section avatar>
          <q-img :src="photo.thumbnailUrl" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ photo.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useAlbumStore } from '../stores/albumStore';
  import { useQuasar } from 'quasar';
  
  const albumStore = useAlbumStore();
  const route = useRoute();
  const $q = useQuasar();
  const albumId = route.params.id;
  
  onMounted(async () => {
    await albumStore.fetchPhotosByAlbum(albumId);
  });
  
  const photos = computed(() => albumStore.photos);
  
  const viewPhoto = (url) => {
    $q.dialog({
      title: 'Photo',
      message: `<img src="${url}" style="width: 100%;" />`,
      html: true,
    });
  };
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
  .q-img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 4px;
  }
  </style>
  