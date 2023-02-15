<template>
  <li class="grid grid-cols-3 gap-y-10 border-b border-gray-300 pb-2">
    <header>
      <h3 class="text-lg font-bold">{{ name }}</h3>
      <p v-if="!isHeader" class="text-zinc-400">{{ description }}</p>
    </header>
    <main class="text-center">
      {{ stars }}
    </main>
    <footer class="text-right">
      {{ createdAt }}
    </footer>
  </li>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  createdAt: String,
  stars: Number,
  isHeader: Boolean,
});
</script>

<style lang="scss" scoped></style>
