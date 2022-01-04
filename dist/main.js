"use strict";

// Variables
const bill = document.getElementById("bill").value;
const percentages = document.querySelectorAll('input[name="percentage"]');
let selectedValue;

percentages.forEach((x) => {
  if (x.checked) {
    selectedValue = x.value;
  }
});

window.addEventListener("keydown", function (e) {
  percentages.forEach((x) => {
    if (x.checked) {
      selectedValue = x.value;
    }
  });
  if (e.key === "Enter") {
    console.log(bill);
    console.log(selectedValue);
  }
});
