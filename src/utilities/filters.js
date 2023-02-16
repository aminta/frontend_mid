export function isTop(number, array, field, value) {
  const result = array
    .sort((a, b) => b[field] - a[field])
    .filter((el, i) => i <= number - 1)
    .map((el) => el[field]);

  return result.includes(value);
}
