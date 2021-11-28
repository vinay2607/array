/**
 * @question {https://leetcode.com/problems/squares-of-a-sorted-array/}
 */
/**
 * @solution
 */
function sortSquare(array) {
    let firstHalfArray = [], secondHalfArray = [], firstInPositive = [], shortArray = [], i = 0, j = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0 || array[i] > 0) {
            secondHalfArray.push(array[i] * array[i])
        }
        else {
            firstHalfArray.push(array[i])
        }
    }
    for (let index = firstHalfArray.length - 1; index >= 0; index--) {
        firstInPositive.push(firstHalfArray[index] * firstHalfArray[index])
    }

    while (i < firstInPositive.length && j < secondHalfArray.length) {
        if (firstInPositive[i] < secondHalfArray[j]) {
            shortArray.push(firstInPositive[i])
            i++
        }
        else {
            shortArray.push(secondHalfArray[j])
            j++
        }
    }
    return shortArray.concat(firstInPositive.slice(i)).concat(secondHalfArray.slice(j))
}
console.log(sortSquare([-4, -1, 0, 3, 10]))