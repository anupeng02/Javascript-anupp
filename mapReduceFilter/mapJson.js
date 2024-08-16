let user = [
    {firstName: "anup", lastName: "Gupta", age:26},
    {firstName: "elon", lastName: "musk", age:48},
    {firstName: "Donald", lastName: "trump", age:57},
    {firstName: "Nithya", lastName: "Menon", age:26},
]

let output = user.map((x)=>x.firstName + " "+ x.lastName)
console.log(output)