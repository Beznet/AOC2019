const mass = require('./data.js')

function calcFuel(mass) {
  return Math.floor(mass / 3) - 2
}

function calcRecursiveFuel(massArr) {
  let totalFuel = 0
  for (let mass of massArr) {
      let fuel = mass
      while (fuel > 0) {
          fuel = calcFuel(fuel)
          totalFuel += fuel > 0 ? fuel : 0
      }
  }
  return totalFuel
}

console.log(calcRecursiveFuel(mass))