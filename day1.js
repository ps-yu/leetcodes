// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [3,4,5,6];
let taget = 11;
var twoSum = function(nums, target) {
  for (let x = 0; x < nums.length; x++){
    for (let y = 0; y < nums.length; y++){
      if (x !== y && nums[x]+nums[y]=== target){
        return [x,y]
      } 
    }
  }
}
console.log(twoSum(nums,taget));