/**
 * @question https://leetcode.com/problems/two-sum/
 * @quetion_name two sum
 * @description {Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order}
 */
// @solution
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let temp = target - arr[i]
        if (arr.indexOf(temp) !== -1) {
            if (arr.indexOf(temp) !== i) {
                return [arr.indexOf(temp), i]
            }
        }
    }
}
console.log(twoSum([3, 3], 6))