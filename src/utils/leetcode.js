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


/**
 * 136. 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 思路：
 * 采用异或运算，数组中只有一个数出现了一次，其他的都出现了两次
 * 通过异或，把所有出现偶数次的数字给消除，最后剩下的只有那一个出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = function(nums) {
  let res = 0;
    for(const num of nums) {
        res ^= num;
    }
    return res;
};

export {twoSum, singleNumber}