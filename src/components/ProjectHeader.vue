<script setup>
import ProjectItem from "./ProjectItem.vue";
</script>

<template>
  <ProjectItem
    is-Header
    :name="`Nome e descrizione`"
    :stars="`Rating`"
    :created-at="`Data di creazione`"
  />
</template>

<style lang="scss" scoped></style>
