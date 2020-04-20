// If we want it to refer to a object without context.
// That is where call, apply, bind.

const religion = {
  type: 'humanity',
  property: 'greatest'
}

function getDetails() {
  console.log(`${this.type} is the ${this.property} religion`);
}

getDetails.call(religion);
//humanity is the greatest religion

getDetails.apply(religion);
//humanity is the greatest religion

// Here 'call' or 'apply' mmethod helps to make connection between 'religion' object and 'getDetails' function.
// Or we can say 'call' or 'apply' method helped in creating a reference of 'this' in 'getDetails' functionn to 'religion' object.
// Both 'call' and 'apply' work in the same way but they hanndle arguuments in different manager.