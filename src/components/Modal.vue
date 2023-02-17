<script setup>
defineProps({
  show: Boolean,
  dismissText: String,
  saveText: String,
});
let emit = defineEmits(["dismiss", "confirm"]);
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div><slot name="body">default body</slot></div>
        <footer class="modal-footer">
          <slot name="footer">
            <footer class="modal-footer-buttons-container">
              <button
                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                @click="emit('dismiss')"
              >
                {{ dismissText ? dismissText : "Close" }}
              </button>
              <button
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                @click="emit('confirm')"
              >
                {{ saveText ? saveText : "Save" }}
              </button>
            </footer>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}
.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}
.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 1rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-to,
.modal-leave-from {
  opacity: 100;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-footer-buttons-container {
  max-width: 500px;
  display: flex;
  gap: 1rem;
}
</style>
