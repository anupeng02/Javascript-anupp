let user = [
    {firstName: "anup", lastName: "Gupta", age:26},
    {firstName: "elon", lastName: "musk", age:48},
    {firstName: "Donald", lastName: "trump", age:57},
    {firstName: "Nithya", lastName: "Menon", age:26},
]

// output : {26:2, 48:1, 57:1}

let output = user.reduce((acc, curr)=>{
    if(acc[curr.age]){
        acc[curr.age]= ++acc[curr.age]
    }
    else{
        acc[curr.age] =1;
    }
  
    return acc;
}, {})

console.log(output)