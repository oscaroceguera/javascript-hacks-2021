function Friut (type) {
  this.type = type;
  this.color = 'unknown';
  this.getInformation = getFruitInformation;

  // We can also define the getInformation function internally
  // this.getInformation = function () {
  //   return 'This ' + this.type + ' is ' + this.color + '.';
  // }
}

function getFruitInformation() {
  return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Friut('Mexican lime')
console.log(lime.getInformation()) // undefined

lime.color = 'green'
console.log(lime.getInformation())
