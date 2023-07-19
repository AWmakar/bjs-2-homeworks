"use strict"
function solveEquation(a, b, c) {
  
  let d = b * b - (4 * a * c);
  let arr = [];
  if (d > 0) {

    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);

    arr.push(x1);
    arr.push(x2);

  }

  else if (d == 0) {

    let x = (-b / (2*a));
    arr.push(x);
 }
  

    return arr;

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let month_percent = percent/100 / 12;
  let body = amount - contribution;
  let monthly_pay = body * (month_percent + (month_percent / (((1 + month_percent)**countMonths) - 1)));
  let all_amount = monthly_pay * countMonths;
  return +all_amount.toFixed(2);
}