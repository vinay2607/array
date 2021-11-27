function search(array, target) {
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        let half = Math.floor((start + end) / 2)
        if (target > array[half]) {
            start = half + 1
        }
        else if (target < array[half]) {
            end = half - 1
        }
        else if (target === array[half]) {
            console.log(half)
            return half
        }
    }
    return -1
}

search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 7)