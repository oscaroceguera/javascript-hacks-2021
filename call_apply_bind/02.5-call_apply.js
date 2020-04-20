// Pass some parameters to the function "getDetailts"
const religion = {
     type: "humanity",
     property:"greatest"
}

function getDetails(world,creature){
    console.log(`${this.type} is the ${this.property} religion in the ${world} of ${creature}`);
}

getDetails.call(religion,"modern world","human");
//humanity is the greatest religion in the modern world of human

getDetails.apply(religion,["modern world","human"]);
//humanity is the greatest religion in the modern world of human

// "call" method takes arguments additional to the "this" context linearly seperated by comma while
// "apply" handles argument as an array.