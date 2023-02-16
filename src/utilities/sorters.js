export function sorter(a, b, field, sortOrder) {
  function sortAlphabetically(a, b) {
    if (a[field] < b[field]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[field] > b[field]) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  }

  function sortNumbers(a, b) {
    return sortOrder === "asc" ? a[field] - b[field] : b[field] - a[field];
  }

  function sortDates(a, b) {
    return sortOrder === "asc"
      ? new Date(a[field]) - new Date(b[field])
      : new Date(b[field]) - new Date(a[field]);
  }

  switch (field) {
    case "name":
      return sortAlphabetically(a, b, field);
    case "stars":
      return sortNumbers(a, b, field);
    case "createdAt":
      return sortDates(a, b, field);
    default:
      break;
  }
}
