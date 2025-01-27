<script setup lang="ts">

import {type Video} from '../types/video'
defineProps<{
    videos: Video[],
    menuOpen?: boolean
}>()


</script>

<template>
  <div class="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div
      v-for="video in videos"
      :key="video.id"
      class="bg-gray-800 rounded-lg overflow-hidden shadow-md"
    >
      <img :src="video.thumbnail" :alt="video.title" class="w-full h-40 object-cover" />
      <div class="p-4">
        <h3 class="text-white font-semibold truncate">{{ video.title }}</h3>
        <p class="text-gray-400 text-sm">{{ video.channel }}</p>
      </div>
    </div>
  </div>
</template>


