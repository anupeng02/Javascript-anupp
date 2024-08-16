let arr = [7, 8, 3, 10, 2,  12, 15, 13, 11];

// function findSum(){
//     let sum =0; 

//     for(let i=0; i<arr.length; i++){
//       sum = arr[i]+ sum
      
//     }
//     return sum;
// }

// console.log(findSum(arr))

let sum = arr.reduce((acc, curr)=>{
    acc = curr+acc
    return acc
}, 0)

console.log(sum)


// QUESTION : 2
// FIND MAXIMUM VALUE

// function findMax(){
//     let max = 0;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(findMax(arr))

let 

























