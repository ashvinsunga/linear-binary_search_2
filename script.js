// THE GOAL OF THIS FUNCTION
// Pseudocode
// - This function accepts a sorted array and a value
// - Create a left pointer at the start of the array, and a
//  right pointer at the end of the array
// - While the left pointer comes before the right pointer;
//      - Create pointer in the middle
//      - If you find the value you want, return the index
//      - if the value is too small, move the left pointer up
//      - if the value is too large, move the right pointer down
// - If you never find the value, return -1

// 1st Solution - Time complexity O(N) - Linear Search
// function linearSearch(arr,val){
//     for (element of arr){
//         if (element === val) return arr.indexOf(element);
//     }
//     return arr.indexOf(val);
// }


// 2nd Solution
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if(arr[middle] === elem){
//         return middle;
//     }
//     return -1;
// }


// 2nd Solution (Shorthand)
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle -1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1,4,5,7,34,78], 7));