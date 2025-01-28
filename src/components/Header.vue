<script setup lang="ts">
import { ref } from 'vue';
import Youtube from './Icons/Youtube.vue';
import Avatar from './Icons/Avatar.vue';

const searchTerm = ref<string>('');

const emit = defineEmits<{
  // <eventName>: <expected arguments>

  change: [] // when there are no arguments
  update: [value: any] 
}>()

const onSearch = () => {
  emit('update',searchTerm.value)
};
</script>

<template>
  <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <Youtube/>
      <span class="text-xl font-semibold">YouTube Clone</span>
    </div>
    <input
      type="text"
      placeholder="Search"
      v-model="searchTerm"
      @keyup.enter="onSearch"
      class="bg-gray-700 text-white p-2 rounded-lg w-1/3"
    />
    <div class="flex items-center space-x-4">
      <button class="p-2 bg-gray-700 rounded-full">
       <Avatar/>
      </button>
    </div>
  </header>
</template>
