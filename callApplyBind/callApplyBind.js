let userDetails ={
    name : "anup gupta",
    age: 25,
    Designation : "react Developer",
    printDetails: function(){
        console.log(this.name)
    }
}

userDetails.printDetails();

let userDetails2 ={
    name : "Raja Ram",
    age: 25,
    Designation : "react Developer",
    printDetails: function(){
        console.log(this.name)
    }
}

userDetails.printDetails.call(userDetails2)