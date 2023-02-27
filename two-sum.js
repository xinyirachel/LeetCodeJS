//Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//give a array of numbers
//return index of 2 numbers
//2 number added up to target



let twoSum = function twoSum(nums, target){
  for (let i = nums.length -1 ; i >= 0; i--){
    for (let j = 0; j < i; j++){
      if ( addition(nums[i]+nums[j]) === target){
        return [i,j];
      }
    }
  }
}

let addition = function(a, b) {
	return a + b;
};




console.log(twoSum([2,7,5,6,7,7],11));