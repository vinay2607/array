/**
 * @question {https://leetcode.com/problems/rotate-array/}
 */
/**
 * @Solution
 */
function rotate(array, k) {
    while (k > array.length) {
        k = k - array.length
    }
    let temp = array.splice(-1 * k)
    array.unshift(...temp)
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))