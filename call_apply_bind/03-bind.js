// Now what if you wanted to use "getDetails" function with different "arguments" in many places of your code.
// Using "call" or "apply" method multiple times-can be one of the solution but "bind" method can make the process more easy.

// "Bind" method creates a reference of "this" to the object it has been passed with, same like "apply" or "call" but returns a function.
// Now that function can be used multiple times with different "arguments" in your code.

const religion = {
  type: "humanity",
  property: "greatest",
};

function getDetails(world, creature) {
  console.log(
    `${this.type} is the ${this.property} religion in the ${world} of ${creature}`
  );
}

const newGetDetails = getDetails.bind(religion)
newGetDetails('Modern world', 'human')
newGetDetails('future world', "different creatures")

// ----
// Invoked directly
getDetails.bind(religion)('CAtholic', 'dogs')
