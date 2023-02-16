<script setup>
import ColumnSort from "./ColumnSort.vue";
import { formatDate } from "@/utilities/formatters.js";
import { computed, ref, watch, getCurrentInstance } from "vue";
import { useProjectsStore } from "@/stores/projects.js";

let key = getCurrentInstance().vnode.key;

let store = useProjectsStore();

let props = defineProps({
  name: String,
  description: String,
  "created-at": String,
  stars: Number,
  isHeader: Boolean,
});

let classObject = {
  flex: props.isHeader,
  "flex-row": props.isHeader,
  "justify-between": props.isHeader,
};
let item = store.projects.find((project) => project.id === key);

let starred = ref(item?.starredFromCurrentUser);

let iconClasses = computed(() =>
  starred.value ? "fa-solid fa-star" : "fa-regular fa-star"
);

let buttonClasses = computed(() => ({
  "flex gap-2 border  rounded-[18px] p-3 hover:bg-gray-200 hover:border-gray-400": true,
  "bg-gray-200 border-gray-400": starred.value,
  "bg-transparent border-gray-300": !starred.value,
}));
function toggleStar() {
  starred.value = !starred.value;
}

watch(starred, (value) => {
  store.toggleStarToAProject(key, value);
  store.toggleStarredFromCurrentUser(key, value);
});
</script>

<template>
  <li class="grid grid-cols-4 gap-y-10 border-b border-gray-300 pb-2">
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
    <aside v-if="!isHeader" class="flex justify-end items-baseline">
      <button :class="buttonClasses" @click="toggleStar">
        <span class="leading-none">Rate</span>
        <font-awesome-icon :icon="iconClasses" />
      </button>
    </aside>
  </li>
</template>

<style lang="scss" scoped></style>
