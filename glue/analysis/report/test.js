console.log(Number(Math.round(1.005 + "e2") + "e-2")) // 1.01

const roundAccurately = (number, decimalPlaces) => Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces)

console.log(roundAccurately(1.005, 2)) // 1.01