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
  chooseExpenses: function () {
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
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Your daily budget: " + appData.moneyPerDay + "$");
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Min level");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Average level");
    } else if (appData.moneyPerDay > 2000) {
      console.log("High level");
    } else {
      console.log("Error!");
    }
  },
  checkSavings: function () {
    if (appData.savings) {
      let save = +prompt("What's the sum of savings?");
      let percent = +prompt("What's the percent?");

      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Monthly income from your deposit: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let optExpense = prompt("Optional expenses?");

      if (optExpense) {
        appData.optionalExpenses[i] = optExpense;
      } else {
        console.log("Bad result");
        i--;
      }
    }
  },
  chooseIncome: function () {
    let items = prompt("What get you extra income? (Separate comma)", "");
    while (typeof items != "string" || items == "" || items == null) {
      console.log("Income data is not correct or empty");

      items = prompt("What get you extra income? (Separate comma)", "");
    }
    appData.income = items.split(",");
    appData.income.push(prompt("Maybe anything else?"));
    appData.income.sort();

    appData.income.forEach((item, index) => {
      console.log(`Income ${index}. ${item}`);
    });
  },
};

appData.chooseIncome();
console.log("Our program has data:");

for (const key in appData) {
  console.log(`${key}: ${appData[key]}`);
}
