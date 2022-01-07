"use strict";

// Variables
let bill;
const billEl = document.getElementById("bill");
let peopleAmount;
const percentages = Array.from(
  document.querySelectorAll('input[name="percentage"]')
);
const percentagesRadio = percentages.slice(0, -1);

let percentage;

let tipPerPerson;
let totalPerPerson;
let tipAmount = document.getElementById("tip-amount");
let totalAmount = document.getElementById("total-amount");

const customPercentage = document.getElementById("percentageCostum");

percentagesRadio.forEach((x) => {
  x.addEventListener("focus", function () {
    if (customPercentage.value) {
      customPercentage.value = "";
    }
  });
});

const calculation = function () {
  tipPerPerson = (bill * percentage) / peopleAmount;
  totalPerPerson = bill / peopleAmount;

  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
};

const errorMessages = function () {
  const billEl = document.getElementById("bill");
  const errorBill = document.getElementById("error--bill");

  const peopleEl = document.getElementById("amountOfPeople");
  const errorPeople = document.getElementById("error--people");
  // error message bill
  if (!bill) {
    billEl.classList.add("error--bill");
    errorBill.classList.remove("hide");
  }
  if (!peopleAmount) {
    peopleEl.classList.add("error--bill");
    errorPeople.classList.remove("hide");
  }
};

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

    if (percentage && bill && peopleAmount) {
      calculation();
    } else errorMessages();

    percentage = 0;
  }
});

customPercentage.onfocus = function () {
  percentages.forEach((x) => {
    if (x.checked) {
      x.checked = false;
    }
  });
};
