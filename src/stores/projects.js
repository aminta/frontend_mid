import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [],
  }),
  actions: {
    async fill() {
      let r = await import("@/data.json");
      this.$state = { projects: r.default };
    },
  },
  getters: {},
});
