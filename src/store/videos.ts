import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useVideoStore = defineStore('videoStore', <T>() => {
    const videos = ref<T[]>([])

  

    return { videos}
})