<script setup>
import { ref, reactive, watch } from "vue";
import { useProjectsStore } from "@/stores/projects.js";
let store = useProjectsStore();

let props = defineProps({
  field: String,
});
let isAsc = ref(false);
let iconClasses = () =>
  [
    "fa-solid",
    isAsc.value ? "fa-sort-up" : "",
    !isAsc.value ? "fa-sort-down" : "",
  ].join(" ");

const toggleSortOrder = () => {
  isAsc.value = !isAsc.value;
};

watch(isAsc, (val) => {
  let sortOrder = val ? "asc" : "desc";
  store.setSortOrder(sortOrder);
  store.setSortBy(props.field);
});
</script>

<template>
  <i>
    <font-awesome-icon @click="toggleSortOrder" :icon="iconClasses()" />
  </i>
</template>

<style lang="scss" scoped></style>
