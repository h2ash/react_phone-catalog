const calcArrayOfPages = (pages) => {
  const arr = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pages; i++) {
    arr.push(i);
  }

  return arr;
};

export default calcArrayOfPages;
