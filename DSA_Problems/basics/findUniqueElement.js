// Every element occurs twice except for 1, find the unique element, duplicates are adjacent to each other
// input-> 3, 3, 1, 1, 8, 8, 10, 10, 19, 6, 6, 2, 2, 4, 4

const findUniqueElement = (arr)=>{

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], arr[i + 1])
        if (arr[i] !== arr[i + 1]) {
            return arr[i];
        } else if (arr[i] === arr[i + 1]) {

            i++;
        }
    }

}

let arr = [3, 3, 1, 1, 8, 8, 10, 10, 19, 6, 6, 2, 2, 4, 4];
console.log("output :: ", findUniqueElement(arr))
