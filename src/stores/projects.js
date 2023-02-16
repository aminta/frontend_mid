import { defineStore } from "pinia";
import { sorter } from "@/utilities/sorters";
import { isTop } from "../utilities/filters";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [],
    sortOrder: "",
    sortBy: "",
    searchString: "",
    showOnlyTopThree: false,
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
    setShowOnlyTopThreProjects(bool) {
      this.showOnlyTopThree = bool;
    },
  },
  getters: {
    projectsSorted() {
      if (!this.sortBy) {
        return this.projectsFiltered;
      }

      // Be careful with reverse() and sort() in a computed property! These two methods will mutate the original array, which should be avoided in computed getters. Create a copy of the original array before calling these methods
      return [...this.projectsFiltered].sort((a, b) =>
        sorter(a, b, this.sortBy, this.sortOrder)
      );
    },
    projectsFiltered() {
      if (!this.searchString && !this.showOnlyTopThree) {
        return this.projects;
      }
      return this.projects.filter((project) => {
        const searchStringIsFound = project.name
          .toLowerCase()
          .includes(this.searchString.toLowerCase());
        const isTopThree = isTop(3, [...this.projects], "stars", project.stars);

        return this.showOnlyTopThree ? isTopThree : searchStringIsFound;
      });
    },
  },
});
