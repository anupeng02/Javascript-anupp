
/*

currying is the function that take one argument at a time and returning a new
function according to the argument

*/


// function sum(a){

//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }

// }

// console.log(sum(1)(2)(3));


function sum(a){
    return function(b){
          if(b){
                return sum(a+b)
          }
          else{
            return a;
          }
    }

}

console.log(sum(1)(2)(3)(4)())