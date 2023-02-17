import { ref, watch } from "vue";

export default function useStorage(key, currentState = false) {
  let storedVal = read(key);

  let data = ref(storedVal);

  function write(key, value) {
    const newData = JSON.stringify(value);
    localStorage.setItem(key, newData);
    return newData;
  }

  function read(key) {
    const dataAsString = localStorage.getItem(key);
    const existingData = JSON.parse(dataAsString);
    return existingData;
  }

  function reset() {
    localStorage.removeItem(key);
  }

  if (currentState) {
    watch(
      currentState,
      (state) => {
        // persist the whole state to the local storage whenever it changes
        localStorage.setItem(key, JSON.stringify(state));
      },
      { deep: true }
    );
  }

  return { data: data.value, write, reset };
}
