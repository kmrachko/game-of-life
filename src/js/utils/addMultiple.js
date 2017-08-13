export default function (set, values) {
  let resultSet = new Set(set);
  values.forEach(value => resultSet.add(value));
  return resultSet;
}