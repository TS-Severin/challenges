
// Tip Calculator

let mealCost = 22.5;
let tipPercentage = 15;

const tipAmount = mealCost * (tipPercentage / 100);

const totalCost = tipAmount + mealCost;

console.log("The total cost of you bill is: ", totalCost, "euros");

// Saving Goals

let startingBalance = 1000;
let monthlyContribution = 100;
let months = 12;

let totalSavings = startingBalance + monthlyContribution * months;

console.log(
  "After 12 months of saving, you will have",
  totalSavings,
  "$",
  "in your account."
);

