//Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//give a array of numbers
//return index of 2 numbers
//2 number added up to target



let twoSum = function(nums, target){
  for (let i = nums.length -1 ; 1 >= 0; i--){
    for (let k = 0; k < i; i++){
      if ( addition(nums[i]+nums[k]) === target){
        return [i,k];
      }
    }
  }
}

let addition = function(a, b) {
	return a + b;
};


