let userDetails ={
    name : "anup gupta",
    age: 25,
    designation : "react Developer",
    
}
 function printDetails(state, city){
    console.log(this.name + " " +state + " "+ city)
    // console.log(this.designation)
}

printDetails.call(userDetails, "uttar Pradesh","varanasi")


let userDetails2 ={
    name : "Raja Ram",
    age: 25,
    designation : "IAS",
    
}

printDetails.call(userDetails2, "Karnataka", "Bangalore" );