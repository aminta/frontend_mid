function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(date) {
  const timestamp = Date.parse(date);
  if (isNaN(timestamp)) {
    return date;
  }

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateAsString = new Intl.DateTimeFormat("it-IT", options).format(
    timestamp
  );

  return capitalizeFirst(dateAsString);
}

export function formatDateForStorage(date) {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}
