"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - (4 * a * c);
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);

    arr.push(x1);
    arr.push(x2);
  }

  else if (d = 0) {
    let x1 = -b/(2*a);
    arr.push(x1);
 }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}