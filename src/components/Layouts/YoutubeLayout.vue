<script setup lang="ts">

</script>
<template>
 <div class="flex flex-col h-screen">
    <slot name="header"></slot>

    <div class="flex flex-1">
        <slot name="sidebar"></slot>
        <main class="flex-1 bg-gray-900 overflow-y-auto">

            <slot name="videos"></slot>
        </main>
    </div>
 </div>
</template>