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
