export const filterProducts = (arr, filterFields, filterString) => {
  const regex = filterString.split(" ").map((w) => new RegExp(w, "i"));

  const filteredArr = arr.filter((item) => {
    const includesWords = regex.every((rx) => filterFields.some((field) => rx.test(item?.[field])));
    return includesWords;
  });

  return filteredArr;
};
