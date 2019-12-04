const mass = require('./data.js')

//I added a 0 in my starting data to force total = 0 on the first loop. Is that illegal?

function calculateMass (total, num) {
  let accumulator = Math.floor(num/3) -2
  return total + accumulator
}

console.log(mass.reduce(calculateMass, 0))