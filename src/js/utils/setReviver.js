export default function (key, value) {
  if (typeof value === 'string') {
    if (value.slice(0, 7) === 'SET_STR') {
      return new Set(JSON.parse(value.slice(7)));
    }
  }
  return value;
}