// Every element occurs twice except for 1, find the unique element, duplicates are adjacent to each other
// input-> 3, 3, 1, 1, 8, 8, 10, 10, 19, 6, 6, 2, 2, 4, 4

const findUniqueElement = (arr)=>{

    let startIndex = 0;
    let endIndex = arr.length - 1;
    let opt;
    let middle
    while (startIndex <= endIndex) {
        middle = Math.floor((startIndex + endIndex) / 2);
        // console.log("middle1 :: ", middle)
        if (arr[middle] === arr[middle - 1]) {
            middle = middle - 1;
            if (middle % 2 === 0) {
                startIndex = middle + 2;
            } else {
                endIndex = middle - 1;
            }
        } else if (arr[middle] === arr[middle + 1]) {
            if (middle % 2 === 0) {
                startIndex = middle + 1;
            } else {
                endIndex = middle -1;
            }
        } else {
            return arr[middle];
        }

    }

}

let arr = [3, 3, 1, 1, 8, 8, 10, 10, 19, 6, 6, 2, 2, 4, 4];
console.log("output :: ", findUniqueElement(arr))



// // Every element occurs twice except for 1, find the unique element, duplicates are adjacent to each other
// // input-> 3, 3, 1, 1, 8, 8, 10, 10, 19, 6, 6, 2, 2, 4, 4

// const findUniqueElement = (arr)=>{

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i], arr[i + 1])
//         if (arr[i] !== arr[i + 1]) {
//             return arr[i];
//         } else if (arr[i] === arr[i + 1]) {

//             i++;
//         }
//     }

// }

// let arr = [3, 3, 1, 1, 8, 8, 10, 10, 19, 6, 6, 2, 2, 4, 4];
// console.log("output :: ", findUniqueElement(arr))
