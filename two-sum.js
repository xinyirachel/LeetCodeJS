//Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//give a array of numbers
//return index of 2 numbers
//2 number added up to target
// https://www.youtube.com/watch?v=J0U1obg5BEM

function addition(a, b) {
	return a + b;
};

function twoSum(nums, target){
  for (let i = nums.length -1 ; i >= 0; i--){
    for (let j = 0; j < i; j++){
      if ( (nums[i]+nums[j]) === target){
        return [i,j];
      }
    }
  }
};

const nums1 = [2,7,11,15]
console.log(twoSum(nums1,9));