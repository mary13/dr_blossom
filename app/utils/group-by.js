export default function groupBy(collection, typeKey) {
  return collection.reduce((memo, item) => {
    const value = item[typeKey];
    if (!memo[value]) {
      memo[value] = [];
    }
    memo[value].pushObject(item);
    return memo;
  }, {});
}
