<script setup>
import Modal from "@/components/Modal.vue";
import { ref, reactive, computed, watch } from "vue";
import { useProjectsStore } from "@/stores/projects.js";
import Errors from "./Errors.vue";

let store = useProjectsStore();

let showModal = ref(false);

const errorsMessages = {
  name: "Attenzione, inserire nome progetto",
  description: "Attenzione, inserire descrizione progetto",
};

let validationErrors = reactive([]);

let newProject = reactive({
  name: "",
  description: "",
});

const fieldsToCheck = computed(() => {
  return {
    name: newProject.name,
    description: newProject.description,
  };
});

const onClose = () => {
  showModal.value = false;
  newProject.name = "";
  newProject.description = "";
};

const isEmpty = (el) => {
  return el.trim() === "";
};

const checkEmptyFields = (fields) => {
  validationErrors.splice(0);
  let result = false;
  for (const property in fields) {
    const value = fields[property];
    if (isEmpty(value)) {
      result = true;
      validationErrors.push(errorsMessages[property]);
    }
  }
  return result;
};

const onSave = () => {
  validationErrors.splice(0);

  const thereAreErrros = checkEmptyFields(fieldsToCheck.value);

  if (!thereAreErrros) {
    validationErrors.splice(0);
    store.addNewProject(newProject);
    showModal.value = false;
    newProject.name = "";
    newProject.description = "";
  }
};
watch(
  () => newProject.name,
  (value) => {
    checkEmptyFields(fieldsToCheck.value);
  }
);
watch(
  () => newProject.description,
  (value) => {
    checkEmptyFields(fieldsToCheck.value);
  }
);
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
        <Errors :errors="validationErrors" />
      </template>
    </Modal>
  </Teleport>
</template>
