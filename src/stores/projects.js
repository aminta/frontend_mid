import { defineStore } from "pinia";
import { sorter } from "@/utilities/sorters";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [],
    sortOrder: "",
    sortBy: "",
  }),
  actions: {
    async fill() {
      let r = await import("@/data.json");
      this.$state = { projects: r.default };
    },
    setSortOrder(sortOrder) {
      this.sortOrder = sortOrder;
    },
    setSortBy(sortBy) {
      this.sortBy = sortBy;
    },
  },
  getters: {
    projectsSorted() {
      if (!this.sortBy) {
        return this.projects;
      }
      return this.projects.sort((a, b) =>
        sorter(a, b, this.sortBy, this.sortOrder)
      );
    },
  },
});
