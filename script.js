'use strict';

let money = +prompt("What's your monthly budget?", "10000");
let time = prompt("Enter date using format YYYY-MM-DD");

console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: null,
    optionalExpenses: null,
    income: null,
    savings: false
};

let category1 = prompt("Enter the required item of expenses in this month");
let answer1 = +prompt("How much are you going to spend?");
let category2 = prompt("Enter the required item of expenses in this month");
let answer2 = +prompt("How much are you going to spend?");

appData.expenses = {
    category1: answer1,
    category2: answer2
};

console.log(appData);


alert("Your daily budget: " + (money / 30));