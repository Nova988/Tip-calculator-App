"use strict";

// Variables
let bill;
let peopleAmount;
const percentages = Array.from(
  document.querySelectorAll('input[name="percentage"]')
);
const percentagesRadio = percentages.slice(0, -1);
const resetButton = document.getElementById("button--reset");

let percentage;

let tipPerPerson;
let totalPerPerson;
let tipAmount = document.getElementById("tip-amount");
let totalAmount = document.getElementById("total-amount");

const customPercentage = document.getElementById("percentageCostum");

const billEl = document.getElementById("bill");
const errorBill = document.getElementById("error--bill");

const errorPercentage = document.querySelector(".error--percentage");

const peopleEl = document.getElementById("amountOfPeople");
const errorPeople = document.getElementById("error--people");

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
  // error message bill
  if (!bill || bill <= 0) {
    billEl.classList.add("error--border");
    errorBill.classList.remove("hide");
  }

  if (!peopleAmount || peopleAmount <= 0) {
    peopleEl.classList.add("error--border");
    errorPeople.classList.remove("hide");
  }

  if (!percentage || percentage <= 0) {
    percentages[5].classList.add("error--border");
    errorPercentage.classList.remove("hide");
  }
};

const resetStyles = function () {
  if (bill) {
    billEl.classList.remove("error--border");
    errorBill.classList.add("hide");
  }

  if (peopleAmount) {
    peopleEl.classList.remove("error--border");
    errorPeople.classList.add("hide");
  }

  if (percentage) {
    percentages[5].classList.remove("error--border");
    errorPercentage.classList.add("hide");
  }
};

const resetCalculator = function () {
  billEl.value = "";
  customPercentage.value = "";

  percentages.forEach((x) => {
    if (x.checked) {
      x.checked = false;
    }
  });

  peopleEl.value = "";

  tipAmount.textContent = "$0";
  totalAmount.textContent = "$0";

  billEl.classList.remove("error--border");
  errorBill.classList.add("hide");

  peopleEl.classList.remove("error--border");
  errorPeople.classList.add("hide");

  percentages[5].classList.remove("error--border");
  errorPercentage.classList.add("hide");
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

    if (
      percentage &&
      percentage > 0 &&
      bill &&
      bill > 0 &&
      peopleAmount &&
      peopleAmount > 0
    ) {
      calculation();
      resetStyles();
    } else {
      resetStyles();
      errorMessages();
    }
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

resetButton.addEventListener("click", function () {
  resetStyles();
  resetCalculator();
});
