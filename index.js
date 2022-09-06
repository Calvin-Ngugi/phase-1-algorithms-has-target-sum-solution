//code here
function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers[complement]) return true;
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity = 0(n)
*/

/* 
  Add your pseudocode here

  create an object to keep track of all the numbers we've seen
  iterate over the array of numbers
  //
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  //
  check if any of the keys in our object is the complement to the current number
    if so, return true
  //
  save the current number as the key on our object so we can check it later against other numbers
  //
  if we reach the end of the array, return false

*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

/*

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const other = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === other) 
      return true;
    }
  }
  return false;
}

//look through each number in the sequence
  for (let i = 0; i < array.length; i++) {
    // look through the other of the numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      //add and compare to the target value
      if (array[i] + array[j] === target) {
        return true
        }
      }
    }
  return false;



const arr = [7, 0, -4, 5, 2, 3];
const allTwoSum = (arr, target) => {
   const map = {};
   const results = [];
   for (let i = 0; i < arr.length; i++) {
      if (map[arr[i]]) {
         results.push([target − arr[i], arr[i]]);
         continue;
      };
      map[target − arr[i]] = true;
   };
   return results;
};
console.log(allTwoSum(arr, 5));



function bruteForceTwoSum(array, sum){
    let nums = []
    
    let prevNums = []

    for(let x in array){
        for(let y in array){
            if (array[x] + array[y] === sum){
                if(!!nums.length){ 
                    if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
                        prevNums.push(array[x])
                        nums.push([array[x], array[y]])
                    } 
                } else {
                    nums.push([array[x], array[y]])
                    prevNums.push(array[x])
                }
            }
        }
    }
   return nums
}



let hashTwoSum = (array, sum) => {
    let storageHash = {}
    let nums = []
    
    for(let i in array){
      let addend = sum - array[i]
        
        if (addend in storageHash){
            nums.push([addend, array[i]])
        }
        storageHash[array[i]] = i
    }
    return nums
}
*/