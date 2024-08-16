let arr = [7, 8, 3, 10, 2,  12, 15, 13, 11];

// function isEven(x){
//    return x%2==0;
// }

// function isOdd(x){
//     return x%2==0;
//  }

//  let output = arr.filter(isEven);

let even = arr.filter((x)=>x%2==0)

 console.log(even)

 let odd = arr.filter((x)=>x%2)

 console.log(odd);