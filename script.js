"use strict";

let money, time;

function start() {
  money = +prompt("What's your monthly budget?", "10000");
  time = prompt("Enter date using format YYYY-MM-DD");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("What's your monthly budget?", "10000");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

function chooseExpenses() {
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
}

chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();

  alert("Your daily budget: " + appData.moneyPerDay + "$");
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Min level");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Average level");
  } else if (appData.moneyPerDay > 2000) {
    console.log("High level");
  } else {
    console.log("Error!");
  }
}

detectLevel();

function checkSavings() {
  if (appData.savings) {
    let save = +prompt("What's the sum of savings?");
    let percent = +prompt("What's the percent?");

    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Monthly income from your deposit: " + appData.monthIncome);
  }
}

checkSavings();

function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let optExpense = prompt("Optional expenses?");

    if (optExpense) {
      appData.optionalExpenses[i] = optExpense;
    } else {
      console.log("Bad result");
      i--;
    }
  }
}

chooseOptExpenses();

console.log(appData);
