/**
 * 1. 两数之和
 * 给定一个整数数组nums和一个整数目标值target，请你在该数组中找出和为目标值target的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 例：输入：nums = [2,7,11,15], target = 9，输出：[0,1]
 */
 const twoSum = function(nums, target) {
  for(let i =0;i<nums.length;i++) {
      let diff = target - nums[i];
      if(nums.indexOf(diff)!=-1 && nums.indexOf(diff)!=i){
        return [i, nums.indexOf(diff)];
      }        
    }
};

export {twoSum}