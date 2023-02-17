<script setup>
defineProps({
  errors: Array,
});
</script>

<template>
  <ul class="flex flex-col p-3 pb-0 gap-1">
    <li
      class="flex flex-col items-center"
      v-for="(error, index) in errors"
      :key="index"
    >
      <p class="text-red-500 font-bold">{{ error }}</p>
    </li>
  </ul>
</template>
