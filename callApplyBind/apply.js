let userDetails ={
    name : "anup gupta",
    age: 25,
    designation : "react Developer",
    
}
 function printDetails(state, city){
    console.log(this.name + " " +state + " "+ city)
    // console.log(this.designation)
}

printDetails.apply(userDetails, ["uttar pradesh", "varanasi"])


let userDetails2 ={
    name : "Raja Ram",
    age: 25,
    designation : "IAS",
    
}

printDetails.apply(userDetails2, ["Karnataka", "Bangalore"] );

// there is only one difference in call and apply ie we can pass array as an argument 