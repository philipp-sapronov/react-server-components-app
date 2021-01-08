export default (array, searchQuery) => {
  if (typeof searchQuery !== 'string' || !searchQuery.trim()) return [];
  searchQuery = searchQuery.toLowerCase();

  function isIncludeString(item) {
    if (item.toLowerCase().includes(searchQuery)) return true;
    else return false;
  }

  return array.filter(item => {
    if (
      isIncludeString(item.name) ||
      isIncludeString(item.surname) ||
      isIncludeString(item.description) ||
      isIncludeString(item.phone)
    )
      return item;
  });
};
