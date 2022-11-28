const getRunTime = (f, ...args) => {
  console.time(f.name);
  const result = f(...args);
  console.timeEnd(f.name);
  return result;
};

const getArrayWithRandomBooleanValues = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.random() > 0.5);
  }
  return arr;
};

const convertBooleanArrayToZeroesAndOnes = (arr) => {
  return arr.map((bool) => (bool ? 1 : 0));
};

const booleanArray = getRunTime(getArrayWithRandomBooleanValues, 1000000);

const convertedArray = getRunTime(convertBooleanArrayToZeroesAndOnes, booleanArray);
