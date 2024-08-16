// map function is use to transform the values like we can double the values, triple the values.


let arr = [1, 2, 3, 4, 5];

function double(x)
{
  return x*2;
}
function triple(x)
{
  return x*3;
}

// let output = arr.map(double)
// console.log(output);

// let output1 = arr.map(triple)
// console.log(output1);


let output = arr.map((elm)=>elm*2);
console.log(output)

let output1 = arr.map((elm)=>{
    return elm*3;
})

console.log(output1);
