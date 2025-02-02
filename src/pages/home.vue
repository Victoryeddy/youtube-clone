<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { axiosInstance } from "../plugins/fetchVideos";
import { type ApiKey } from "../types/api";
import { type Video } from "../types/video";
import YoutubeLayout from "../components/Layouts/YoutubeLayout.vue";
import Modal from "../components/Modal.vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import VideoCard from "../components/VideoCards.vue";

const videos = ref<Video[]>([]);

const currentLink = ref<string>("");
const videoTitle = ref<string>("");
const showModal = ref<boolean>(false);
const isVideoLoaded = ref<boolean>(false);

let debouncingCall = ref<any>(null)

let API_KEY: ApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const getVideos = async (value: string) => {
  try {
    let _response = await axiosInstance.get("/search", {
      params: {
        q: value,
        part: "snippet",
        type: "video",
        maxResults: 15,
        key: API_KEY,
      },
    });
    videos.value = _response.data.items;
  } catch (e) {
    console.error(e);
  }
};

// Debouncing 

const searchVideos = (query: string) => {
  if(debouncingCall.value){
    clearTimeout(debouncingCall.value)
  }

  debouncingCall.value = setTimeout(() => {
      getVideos(query)
  }, 1500);
}



const loadVideoFromYT = async () => {
  return new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
    isVideoLoaded.value = true;
  });
};
const showVideo = async (title: string, videoId: string) => {
  videoTitle.value = title;
  currentLink.value = videoId;
  showModal.value = true;
  await loadVideoFromYT();
};

const closeModal = () => {
  showModal.value = false;
  videoTitle.value = "";
  currentLink.value = "";
};
const getImageFromUrl = (image:string) => {
  return new URL(`../assets/${image}.gif`, import.meta.url).href
                        
}
onMounted(() => {
  getVideos("all");
});
</script>
<template>
  <div>
    <YoutubeLayout class="min-h-screen">
      <template #header>
        <div>
          <Header @update="searchVideos" class="fixed z-50 w-full"/>
        </div>
      </template>
      <template #sidebar>
        <div>
          <Sidebar class="hidden lg:flex"/>
        </div>
      </template>
      <template #videos>
        <div class="mt-[6rem]">
          <VideoCard :videos="videos" @show-single-video="showVideo" />
        </div>
      </template>
      <template #modal>
        <Modal
          :isOpen="showModal"
          :title="`${videoTitle.slice(0, 20)}...`"
          @close="closeModal"
        >
          <template #content>
            <Suspense>
              <template #default>
                <div class="relative w-full h-[50vh] md:h-[40vh] lg:h-[60vh] aspect-video mt-5">
                  <iframe
                    v-if="isVideoLoaded"
                    :src="`https://www.youtube.com/embed/${currentLink}`"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="absolute top-0 left-0 w-full h-full rounded-2xl"
                  ></iframe>
                </div>
              </template>
              <template #fallback>
                <div class="flex justify-center items-center">
                  <img
                    :src="getImageFromUrl('fidget-spinner')"
                    alt="Loading spinner"
                  />
                </div>
              </template>
            </Suspense>
          </template>
        </Modal>
      </template>
    </YoutubeLayout>
  </div>
</template>
