let lime =  {
  type: 'Mexican lime',
  color: 'green',
  getInformation: function () {
    return 'this ' + this.type + ' is ' + this.color + '.'
  }
}

console.log(lime.getInformation())
lime.color = 'yellow'
console.log(lime.getInformation())