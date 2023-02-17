<script setup>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
import useStorage from "@/composables/useStorage.js";

const { reset } = useStorage("projects");

function resetApp() {
  reset();
  location.reload();
}

let showModal = ref(false);

const onDismiss = () => {
  showModal.value = false;
};

const onConfirm = () => {
  showModal.value = false;
  resetApp();
};
</script>
<template>
  <button
    @click="showModal = true"
    class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:bg-gray-400 mt-10"
  >
    Reset App
  </button>

  <Teleport to="body">
    <Modal
      :show="showModal"
      @dismiss="onDismiss"
      @confirm="onConfirm"
      dismissText="Cancel"
      saveText="Confirm"
    >
      <template #body>
        <p>
          Are you sure you want to reset the project to its initial state and
          reload the page?
        </p>

        {{ validationError ? validationError : "" }}
      </template>
    </Modal>
  </Teleport>
</template>
