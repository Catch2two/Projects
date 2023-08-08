//The Array to Sort
const SortThisArray = [1, 46, 4, 32, 56, 8, 23, 44, 100, 89, 55]
const sortedArray = mergeSort(SortThisArray);

// Sort
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
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
    
    // Sort a Const
    console.log(sortedArray) // [1,  4,  8, 23, 32, 44, 46, 55, 56, 89, 100]
    
    // Manuel Input Sort
    console.log(mergeSort([1, 3, 6, 2, 0, 99, 45])); // [0,  1,  2, 3, 6, 45, 99]