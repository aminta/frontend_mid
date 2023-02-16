import { defineStore } from "pinia";
import { sorter } from "@/utilities/sorters";
import { isTop } from "@/utilities/filters";
import { nanoid } from "nanoid";
import { formatDateForStorage } from "@/utilities/formatters";
import useStorage from "@/composables/useStorage.js";

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
      const { data, write } = useStorage("projects", this.$state);
      if (data) {
        this.$patch(data);
      } else {
        let r = await import("@/data.json");
        this.$patch({
          projects: r.default.map((project) => ({
            ...project,
            id: nanoid(),
            starredFromCurrentUser: false,
          })),
        });
        write("projects", this.$state);
      }
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
    toggleStarToAProject(id, toggle) {
      this.projects.map((project) => {
        if (project.id === id) {
          if (toggle) {
            project.stars++;
          } else {
            project.stars--;
          }
        }
      });
    },
    toggleStarredFromCurrentUser(id, toggle) {
      this.projects.map((project) => {
        if (project.id === id) {
          if (toggle) {
            project.starredFromCurrentUser = true;
          } else {
            project.starredFromCurrentUser = false;
          }
        }
      });
    },
    addNewProject(newProject) {
      this.projects.unshift({
        ...newProject,
        stars: 0,
        id: nanoid(),
        createdAt: formatDateForStorage(new Date()),
      });
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
