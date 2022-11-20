window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),

  }
}

// Get the inputs from the DOM.
//amount, term, rate
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
 
}

// Get the current values from the UI
// Update the monthly payment
function update() {
const values = getCurrentUIValues();
const P = values.amount;
const i = values.rate /12;
const n = 12 * values.years;
console.log(P, i, n);
// console.log(i*(1+i)**n);
// console.log((1+i)**n - 1);
 //const payment = P * (((i*(1+i)**n)) / ((1+i)**n - 1));
 const payment = (P * i) / (1 - ((1+i)**(-n)));
 console.log(payment);
// console.log(values.amount);
// console.log(values.years);
// console.log(values.rate);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
