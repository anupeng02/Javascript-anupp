let userDetails ={
    name : "anup gupta",
    age: 25,
    designation : "react Developer",
    
}
 function printDetails(){
    console.log(this.name)
    console.log(this.designation)
}

printDetails.call(userDetails)


let userDetails2 ={
    name : "Raja Ram",
    age: 25,
    designation : "IAS",
    
}

// function Borrowing

printDetails.call(userDetails2);