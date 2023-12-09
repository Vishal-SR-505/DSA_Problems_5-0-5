// Given a sorted array with distinct elements, search for the index of an element k, if k is not present, return -1

// input-> 3, 6, 9, 12, 14, 19, 20, 23, 25, 27, key->12



// using Binary Search
const searchElementBinary = (arr, search) =>{
    let startIndex = 0;
    let endIndex = arr.length -1;
    while(startIndex <= endIndex){
    let middle = Math.floor((startIndex + endIndex) / 2);
        
        if(search>arr[middle]){
            startIndex = middle +1 ;
        }else if (search<arr[middle]){
            endIndex = middle -1 ;
           }else{
                return middle;
            
           }

           
      }
    return -1;
    
}
let givenArray = [3, 6, 9, 12, 14, 19, 20, 23, 25, 27]
let searchEle = 9;
console.log("output  ::  ",searchElementBinary(givenArray, searchEle))



// // Given a sorted array with distinct elements, search for the index of an element k, if k is not present, return -1

// // input-> 3, 6, 9, 12, 14, 19, 20, 23, 25, 27, key->12


// const searchElement = (arr, search) =>{
    
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] === search){
            
//             return i;
            
//         }else if (i === arr.length-1){
            
//            return -1;

//         }
            

//     }
    
// }


// let givenArray = [3, 6, 9, 12, 14, 19, 20, 23, 25, 27]

// let searchEle = 23;

// console.log("output  ::  ",searchElement(givenArray, searchEle))
