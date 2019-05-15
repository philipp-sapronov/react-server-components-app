export function sortItemsByProp(array, prop) {
  return array.sort((a, b) => {
    if (a[prop] === b[prop]) return 1;
    if (a[prop] > b[prop]) return 1;
    else return -1;
  });
}

export function reduceItemsByProp(array, prop) {
  const sortedItems = sortItemsByProp(array, prop);
  const reducedItems = [];

  sortedItems.reduce((acc, item, i, array) => {
    const sortLetter = item.name.charAt(0);
    if (acc.sortLetter !== sortLetter) {
      const entities = [];
      acc = { sortLetter, entities };
      reducedItems.push(acc);
    }

    acc.entities = [...acc.entities, item];
    return acc;
  }, {});
  return reducedItems;
}
