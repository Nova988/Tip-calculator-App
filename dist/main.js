"use strict";

// Variables
let bill = document.getElementById("bill").value;
let peopleAmount;
const percentages = document.querySelectorAll('input[name="percentage"]');
let percentage;

let tipPerPerson;
let totalPerPerson;
let tipAmount = document.getElementById("tip-amount");
let totalAmount = document.getElementById("total-amount");

const customPercentage = document.getElementById("percentageCostum");
console.log(customPercentage);

window.addEventListener("keydown", function (e) {
  percentages.forEach((x) => {
    if (x.checked) {
      percentage = Number(x.value);
      customPercentage.value = "";
    }
  });

  if (e.key === "Enter") {
    if (!percentage) {
      percentage = Number(customPercentage.value) / 100;
    }

    bill = Number(document.getElementById("bill").value);
    peopleAmount = Number(document.getElementById("amountOfPeople").value);

    tipPerPerson = (bill * percentage) / peopleAmount;
    totalPerPerson = bill / peopleAmount;

    tipAmount.textContent = `$${tipPerPerson}`;
    totalAmount.textContent = `$${totalPerPerson}`;

    console.log(percentage);

    percentage = 0;
    console.log(percentage);
  }
});

customPercentage.onfocus = function () {
  percentages.forEach((x) => {
    if (x.checked) {
      x.checked = false;
    }
  });
};
