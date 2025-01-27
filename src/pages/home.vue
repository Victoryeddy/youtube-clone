<script lang="ts" setup>
import { ref } from 'vue';
import YoutubeLayout from '../components/Layouts/YoutubeLayout.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import VideoCard from '../components/VideoCard.vue';

const videos = ref([
  {
    id: 1,
    thumbnail: 'https://via.placeholder.com/300x200',
    title: 'Learn Vue 3 Composition API',
    channel: 'Vue Mastery',
  },
  {
    id: 2,
    thumbnail: 'https://via.placeholder.com/300x200',
    title: 'Introduction to TypeScript',
    channel: 'Academind',
  },
  // Add more dummy videos
]);
</script>
<template>
  <div>
    <YoutubeLayout>
      <template #header>
        <div>
          <Header/>
        </div>
      </template>
      <template #sidebar>
        <div>
          <Sidebar/>
        </div>
      </template>
      <template #videos>
          <div>
             <VideoCard :videos="videos" />
          </div>
      </template>
    </YoutubeLayout>
  </div>
</template>



