<script setup>
import Modal from "@/components/Modal.vue";
import { ref, reactive } from "vue";
import { useProjectsStore } from "@/stores/projects.js";

let store = useProjectsStore();

let showModal = ref(false);

let newProject = reactive({
  name: "",
  description: "",
});

const onClose = () => {
  showModal.value = false;
  newProject.name = "";
  newProject.description = "";
};

let validationErrors = reactive([]);

const onSave = () => {
  const noNameInserted =
    newProject.name.trim() === ""
      ? "Attenzione, inserire descrizione progetto"
      : false;
  const noDescriptionInserted =
    newProject.description.trim() === ""
      ? "Attenzione, inserire nome progetto"
      : false;

  if (noNameInserted || noDescriptionInserted) {
    if (noNameInserted && !validationErrors.includes(noNameInserted))
      validationErrors.push(noNameInserted);
    if (
      noDescriptionInserted &&
      !validationErrors.includes(noDescriptionInserted)
    )
      validationErrors.push(noDescriptionInserted);
  } else {
    store.addNewProject(newProject);
    showModal.value = false;
  }
  newProject.name = "";
  newProject.description = "";
};
</script>
<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    @click="showModal = true"
  >
    Add new project
  </button>
  <Teleport to="body">
    <Modal :show="showModal" @dismiss="onClose" @confirm="onSave">
      <template #body>
        <form class="mt-6">
          <div class="flex flex-col gap-4">
            <div class="flex gap-2">
              <label class="min-w-[30%]">Name</label>
              <input
                class="flex-1 border-b border-gray-300 p-2 pl-0 pt-0 focus:outline-none focus:border-sky-500"
                type="text"
                placeholder="Project name..."
                v-model="newProject.name"
              />
            </div>
            <div class="flex gap-2">
              <label class="min-w-[30%]">Description</label>
              <textarea
                class="flex-1 border-b border-gray-300 focus:outline-none focus:border-sky-500"
                type="text"
                placeholder="Project description..."
                v-model="newProject.description"
              />
            </div>
          </div>
        </form>
        {{ validationError ? validationError : "" }}
      </template>
    </Modal>
  </Teleport>
</template>
