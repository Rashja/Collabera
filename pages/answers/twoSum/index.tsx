export const twoSum = (arr: number[], target: number): number[] => {
  const numToIndex = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(arr[i], i);
  }
  return [];
};
const TwoSum = () => {
  console.log(twoSum([11, 17, 4, 25], 21));
  console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
  console.log(twoSum([-1, 0], -1));
  return <h1>Check the console</h1>;
};

export default TwoSum;
