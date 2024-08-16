let user = [
    {firstName: "anup", lastName: "Gupta", age:26},
    {firstName: "elon", lastName: "musk", age:48},
    {firstName: "Donald", lastName: "trump", age:57},
    {firstName: "Nithya", lastName: "Menon", age:26},
]

// output :  [elon, donald]

// find those age whose age is greater than 30

let output = user.filter((x)=>x.age>30).map((x)=> x.firstName)

console.log(output);