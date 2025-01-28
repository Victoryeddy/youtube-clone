<script lang="ts" setup>
import { ref , onMounted } from 'vue';
import { axiosInstance } from '../plugins/fetchVideos';
import { type ApiKey } from '../types/api';
import { type Video } from '../types/video';
import YoutubeLayout from '../components/Layouts/YoutubeLayout.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import VideoCard from '../components/VideoCard.vue';



const videos = ref<Video[]>([

]);

let API_KEY: ApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const shout = async(value: string) => {
  try{
    let _response = await axiosInstance.get('/search', {
      params: {
        q: value,
        part: "snippet",
        type: "video",
        maxResults: 10,
        key: API_KEY
      }
    });
    videos.value = _response.data.items;
  } catch(e) {
    console.error(e);
  }
}

// onMounted(() => {
//   shout('all')
// })


</script>
<template>
  <div>
    <YoutubeLayout>
      <template #header>
        <div>
          <Header @update="shout"/>
        </div>
      </template>
      <template #sidebar>
        <div>
          <Sidebar/>
        </div>
      </template>
      <template #videos>
        <p class="text-white/50">Hello from here</p>
          <div>
             <VideoCard :videos="videos" />
          </div>
      </template>
    </YoutubeLayout>
  </div>
</template>



