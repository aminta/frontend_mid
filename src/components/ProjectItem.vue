<script setup>
import ColumnSort from "./ColumnSort.vue";
import { formatDate } from "@/utilities/formatters.js";

let props = defineProps({
  name: String,
  description: String,
  createdAt: String,
  stars: Number,
  isHeader: Boolean,
});

let classObject = {
  flex: props.isHeader,
  "flex-row": props.isHeader,
  "justify-between": props.isHeader,
};
</script>

<template>
  <li class="grid grid-cols-3 gap-y-10 border-b border-gray-300 pb-2">
    <header :class="classObject">
      <h3 class="text-lg font-bold">{{ name }}</h3>
      <p v-if="!isHeader" class="text-zinc-400">{{ description }}</p>
      <ColumnSort v-if="isHeader" field="name" />
    </header>
    <main class="text-center">
      {{ stars }}
      <ColumnSort v-if="isHeader" field="stars" />
    </main>
    <footer class="text-right">
      {{ formatDate(createdAt) }}
      <ColumnSort v-if="isHeader" field="createdAt" />
    </footer>
  </li>
</template>

<style lang="scss" scoped></style>
