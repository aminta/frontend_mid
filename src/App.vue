<script setup>
import { useProjectsStore } from "@/stores/projects.js";
import AddProject from "./components/AddProject.vue";
import FilterBar from "./components/filters/FilterBar.vue";
import ProjectList from "./components/ProjectList.vue";
import ResetProject from "./components/ResetProject.vue";

let store = useProjectsStore();
store.fill();
</script>

<template>
  <header class="mb-8 flex items-center justify-between">
    <h1 class="text-3xl mb-2 border-b-4 border-blue-700 inline">Projects</h1>
    <aside class="flex gap-6">
      <FilterBar />
      <AddProject />
    </aside>
  </header>

  <main>
    <ProjectList />
  </main>
  <footer class="flex justify-end">
    <ResetProject />
  </footer>
</template>

<style scoped></style>
