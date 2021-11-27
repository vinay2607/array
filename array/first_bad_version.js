/**
 * @question https://leetcode.com/problems/first-bad-version/
 */

function firstVersion(n) {
    let lastFalse = 0
    let lastTrue = n
    while (lastTrue != lastFalse + 1) {
        let temp = Math.floor((lastTrue + lastFalse) / 2)
        let result = isBadVersion(temp)
        if (result) {
            lastTrue = temp
        }
        else {
            lastFalse = temp
        }
    }
    return lastTrue

}