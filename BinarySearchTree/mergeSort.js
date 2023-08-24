// Sort
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2); // Middle Root
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return merge(left, right);
}
// Merge and Push
function merge(left, right) {
    let merged = [];
    let leftSideIndex = 0;
    let rightSideIndex = 0;

    while (leftSideIndex < left.length && rightSideIndex < right.length) {
        if (left[leftSideIndex] < right[rightSideIndex]) {
            merged.push(left[leftSideIndex])
                leftSideIndex++;
            } else {
                merged.push(right[rightSideIndex]);
                rightSideIndex++;
            }
        }

        merged.push(...left.slice(leftSideIndex));
        merged.push(...right.slice(rightSideIndex))

        return merged;
    }
    
export default mergeSort