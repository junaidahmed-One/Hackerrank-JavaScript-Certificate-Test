const dataFinder = (data) => {
  return function find(minRange, maxRange, value) {
    if (maxRange >= data.length) {
      throw new Error("Invalid range");
    }
    for (let i = minRange; i <= maxRange; i++) {
      if (data[i] === value) {
        return true;
      }
    }
    return false;
  };
};

const ans = dataFinder([1, 2, 3, 0, 7, 22, 1]);

console.log(ans(2, 100, 22));
