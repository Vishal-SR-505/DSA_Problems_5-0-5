// Given a sorted array, find floor of a given number k (greatest element<=k in the array)
// input-> -5, 2, 3, 6, 9, 10, 11, 14, 18, key->12

const findFloorValueUsingBinary = (arr,search)=>{
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let opt;
    let middle
    while (startIndex <= endIndex) {
        middle = Math.floor((startIndex + endIndex) / 2);
        console.log("middle :: ", middle)
        if (search > arr[middle]) {
            opt = arr[middle]
            startIndex = middle + 1;
        } else if (search < arr[middle]) {
            endIndex = middle - 1;
        } else if (search === arr[middle]) {
            return arr[middle];

        }

    }
    return opt?opt:"not in range"
    
}

let givenArray = [-5, 2, 3, 6, 9, 10, 11, 14, 18]

let searchEle = 0;

console.log("output  ::  ", findFloorValueUsingBinary(givenArray, searchEle))

// // Given a sorted array, find floor of a given number k (greatest element<=k in the array)
// // input-> -5, 2, 3, 6, 9, 10, 11, 14, 18, key->12

// const findFloor = (arr,key)=>{

//     let opt = 0;

//     for (let i = 0; i < arr.length; i++) { // O(n)

//         if(arr[i]<=key){

//             opt = arr[i]
            
//         }
//     }
//     return opt

// }

// let arrValue = [-5, 2, 3, 6, 9, 10, 11, 14, 18];
// let keyValue = 100;

// console.log("Output :: ", findFloor(arrValue, keyValue))
