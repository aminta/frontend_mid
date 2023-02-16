<script setup>
import { computed, ref, watch } from "vue";
import { useProjectsStore } from "@/stores/projects.js";

let store = useProjectsStore();
let isPressed = ref(store.showOnlyTopThree);

let toggleButton = () => (isPressed.value = !isPressed.value);

watch(isPressed, (value) => {
  store.setShowOnlyTopThreProjects(value);
});

const classes = computed(() => ({
  "border border border-gray-300 rounded-md pl-8 p-1.5 hover:bg-gray-300": true,
  "bg-gray-300": isPressed.value,
}));
const iconClasses = computed(() => [
  "fa-solid",
  !isPressed.value ? "fa-ranking-star" : "fa-circle-xmark",
]);
</script>

<template>
  <div class="relative cursor-pointer" @click="toggleButton">
    <font-awesome-icon
      :icon="iconClasses"
      class="absolute absolute left-[10px] z-10 top-[10px]"
    />
    <button :class="classes">
      {{ isPressed ? "Show all" : "Show Only Top 3 Starred" }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
