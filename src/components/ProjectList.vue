<script setup>
import ProjectItem from "./ProjectItem.vue";
import { useProjectsStore } from "@/stores/projects.js";
import { nanoid } from "nanoid";
import ProjectHeader from "./ProjectHeader.vue";

let store = useProjectsStore();
</script>

<template>
  <section>
    <ul class="grid auto-rows-auto gap-y-4">
      <ProjectHeader />
      <ProjectItem
        v-for="project in store.projects"
        :key="nanoid()"
        :name="project.name"
        :description="project.description"
        :createdAt="project.createdAt"
        :stars="project.stars"
      />
    </ul>
  </section>
</template>

<style lang="scss" scoped></style>
