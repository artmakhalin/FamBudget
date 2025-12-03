'use strict';

let money = +prompt("What's your monthly budget?", "10000");
let time = prompt("Enter date using format YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Enter the required item of expenses in this month");
  let b = +prompt("How much are you going to spend?");

  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    console.log("done");

    appData.expenses[a] = b;
  } else {
    console.log("Bad result");
    i--;
  }
}

//Using WHILE loop
// let i = 0;
// while (i < 2) {
//   let a = prompt("Enter the required item of expenses in this month");
//   let b = +prompt("How much are you going to spend?");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     appData.expenses[a] = b;
//   } else {
//     console.log("Bad result");
//     i--;
//   }
//   i++;
// }

//Using DO...WHILE
// let i = 0;
// do {
//   let a = prompt("Enter the required item of expenses in this month");
//   let b = +prompt("How much are you going to spend?");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     appData.expenses[a] = b;
//   } else {
//     console.log("Bad result");
//     i--;
//   }
//   i++;
// } while (i < 2)

appData.moneyPerDay = appData.budget / 30;

alert("Your daily budget: " + appData.moneyPerDay + "$");

if (appData.moneyPerDay < 100) {
  console.log("Min level");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Average level");
} else if (appData.moneyPerDay > 2000) {
  console.log("High level");
} else {
  console.log("Error!");
}

console.log(appData);