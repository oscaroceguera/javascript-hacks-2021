function Friut (type) {
  this.type = type;
  this.color = 'unknown';
}

Friut.prototype.getInformation = function () {
  return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Friut('Mexican lime')
console.log(lime.getInformation()) // undefined

lime.color = 'green'
console.log(lime.getInformation())
