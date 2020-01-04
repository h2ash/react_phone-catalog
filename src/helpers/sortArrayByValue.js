const sortArrayByValue = (arrayToSort, sortByValue) => {
  const sortedArray = arrayToSort.sort((a, b) => {
    const valueA = a[sortByValue];
    const valueB = b[sortByValue];

    switch (sortByValue) {
      case 'age':
        return valueA - valueB;
      case 'name':
        return valueA.localeCompare(valueB);
      default:
        return 0;
    }
  });

  return sortedArray;
};

export default sortArrayByValue;
