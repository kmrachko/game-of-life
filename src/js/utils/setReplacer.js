export default function (key, value) {
  if (value instanceof Set) {
    return `SET_STR${JSON.stringify(Array.from(value))}`;
  }
  return value;
}