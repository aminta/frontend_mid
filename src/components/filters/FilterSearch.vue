<script setup>
import { useProjectsStore } from "@/stores/projects.js";

let store = useProjectsStore();
</script>
<template>
  <div class="relative max-input-width">
    <font-awesome-icon
      icon="fa-solid fa-magnifying-glass"
      class="absolute left-[10px] z-10 top-[10px]"
    />
    <input
      class="w-full border border-gray-400 rounded-md px-8 py-1"
      type="text"
      name="search"
      placeholder="Search"
      v-model="store.searchString"
    />
    <font-awesome-icon
      v-show="store.searchString"
      icon="fa-solid fa-xmark"
      class="absolute right-[10px] z-10 top-[10px] cursor-pointer"
      @click="store.searchString = ''"
    />
  </div>
</template>

<style scoped>
.max-input-width {
  max-width: 15rem;
}
</style>
