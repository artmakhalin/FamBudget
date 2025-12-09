"use strict";

const startBtn = document.getElementById("start");
const budgetValue = document.querySelector(".budget-value");
const dayBudgetValue = document.querySelector(".daybudget-value");
const levelValue = document.querySelector(".level-value");
const expensesValue = document.querySelector(".expenses-value");
const optionalExpensesValue = document.querySelector(".optionalexpenses-value");
const incomeValue = document.querySelector(".income-value");
const monthSavingsValue = document.querySelector(".monthsavings-value");
const yearSavingsValue = document.querySelector(".yearsavings-value");

const expensesItem = document.querySelectorAll(".expenses-item");
const expensesBtn = document.querySelector(".expenses-item-btn");
const optionalExpensesBtn = document.querySelector(".optionalexpenses-btn");
const countBtn = document.querySelector(".count-budget-btn");
const optionalExpensesItem = document.querySelectorAll(
  ".optionalexpenses-item"
);
const incomeItem = document.querySelector("#income");
const checkSavings = document.querySelector("#savings");
const sumValue = document.querySelector("#sum");
const percentValue = document.querySelector("#percent");
const dayValue = document.querySelector(".day-value");
const monthValue = document.querySelector(".month-value");
const yearValue = document.querySelector(".year-value");

let money, time;

startBtn.addEventListener("click", () => {
  expensesBtn.disabled = false;
  countBtn.disabled = false;
  optionalExpensesBtn.disabled = false;

  time = prompt("Enter date using format YYYY-MM-DD");
  money = +prompt("What's your monthly budget?", "10000");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("What's your monthly budget?", "10000");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  let currentDate = new Date(Date.parse(time));
  yearValue.value = currentDate.getFullYear();
  monthValue.value = currentDate.getMonth() + 1;
  dayValue.value = currentDate.getDate();
});

expensesBtn.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let name = expensesItem[i].value;
    let price = expensesItem[++i].value;

    if (
      typeof name === "string" &&
      typeof name != null &&
      typeof price != null &&
      name != "" &&
      price != "" &&
      name.length < 50
    ) {
      appData.expenses[name] = price;
      sum += +price;
    } else {
      alert("Enter expenses!");
      i--;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener("click", () => {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

countBtn.addEventListener("click", () => {
  if (appData.budget) {
    let expenses = +expensesValue.textContent;
    appData.moneyPerDay = ((appData.budget - expenses) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Min level";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Average level";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "High level";
    } else {
      levelValue.textContent = "Error!";
    }
  } else {
    dayBudgetValue.textContent = "Error!";
  }
});

incomeItem.addEventListener("input", () => {
  let items = incomeItem.value;
  if (isNaN(items) || items != "") {
    appData.income = items.split(",");
    incomeValue.textContent = appData.income;
  }
});

checkSavings.addEventListener("click", () => {
  appData.savings = !appData.savings;
});

sumValue.addEventListener("input", () => calcSavings());

percentValue.addEventListener("input", () => calcSavings());

function calcSavings() {
  if (appData.savings) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
}

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};
