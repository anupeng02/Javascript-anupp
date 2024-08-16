let userDetails ={
    name : "anup gupta",
    age: 25,
    designation : "react Developer",
    
}
 function printDetails(state, city){
    console.log(this.name + " " +state + " "+ city)
    // console.log(this.designation)
}

 let output1 = printDetails.bind(userDetails, "uttar Pradesh","varanasi")
 output1();


let userDetails2 ={
    name : "Raja Ram",
    age: 25,
    designation : "IAS",
    
}

let output = printDetails.bind(userDetails2, "Karnataka", "Bangalore" );
output();

// bind function says : we can create a copy of function and we can inovoke it later when we need.