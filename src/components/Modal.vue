<script setup lang="ts">
import Close from './Icons/Close.vue';

defineProps<{
  isOpen?: boolean,
  title?: string,
}>();

const emit = defineEmits<{
    close: []
}>();

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
<template>
  <transition name="fade">
    <div
      v-show="isOpen"
      class="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
      @click.prevent="closeModal"
    >
      <div class=" rounded-lg shadow-lg max-w-lg md:max-w-[60vw] md:min-h-[60vh] w-full p-6">
        <div class="flex justify-between items-center border-b pb-2 mb-4">
          <h3 class="text-lg font-semibold text-white">{{ title }}</h3>
          <button @click="closeModal" class="cursor-pointer"><Close class="size-9 text-white"/></button>
        </div>
        <div class="modal-content">
          <slot name="content"></slot>
        </div>
        
      </div>
    </div>
  </transition>
</template>




