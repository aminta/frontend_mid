<script setup>
import ProjectItem from "./ProjectItem.vue";
</script>

<template>
  <ProjectItem
    isHeader
    :name="`Nome e descrizione`"
    :stars="`Rating`"
    :createdAt="`Data di creazione`"
  />
</template>

<style lang="scss" scoped></style>
