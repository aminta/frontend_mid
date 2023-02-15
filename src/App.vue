<script setup>
import { useProjectsStore } from "@/stores/projects.js";
import ProjectList from "./components/ProjectList.vue";

let store = useProjectsStore();
store.fill();
</script>

<template>
  <header class="mb-8">
    <h1 class="text-3xl mb-2 border-b-4 border-blue-700 inline">Projects</h1>
  </header>

  <main>
    <ProjectList />
  </main>
</template>

<style scoped></style>
