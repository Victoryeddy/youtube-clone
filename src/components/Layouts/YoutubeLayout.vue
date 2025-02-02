<script setup lang="ts">

</script>
<template>
 <div class="flex flex-col">
    <slot name="header"></slot>

    <div class="flex">
        <slot name="sidebar" class="min-h-screen"></slot>
        <main class="flex-1 bg-gray-900 overflow-y-auto">

            <slot name="videos"></slot>
        </main>
        <slot name="modal"></slot>
    </div>
 </div>
</template>