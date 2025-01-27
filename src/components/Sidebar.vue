<script setup lang="ts">
import { House, Flame, LibraryBig, Clock } from 'lucide-vue-next';

const menuItems = [
  { name: 'Home', icon: House },
  { name: 'Trending', icon: Flame },
  { name: 'Library', icon: LibraryBig },
  { name: 'Watch Later', icon: Clock },
];
</script>

<template>
  <aside class="bg-gray-900 text-white w-60 h-screen p-4 space-y-4 border border-gray-500 border-l-0 border-t-0 border-b-0">
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.name" class="p-2 hover:bg-gray-700 rounded-lg">
          <a href="#" class="flex items-center space-x-2">
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>


