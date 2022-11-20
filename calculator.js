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
const i = values.rate /12/100;
const n = 12 * values.years;
console.log(P, i, n);
// console.log(i*(1+i)**n);
// console.log((1+i)**n - 1);
 //const payment = P * (((i*(1+i)**n)) / ((1+i)**n - 1));
//  const payment = (P * i ) / (1 - ((1+i)**(-n)));
const payment = ((P*i*Math.pow(1+i,n)) / (Math.pow(1+i, n)-1)).toFixed(2); 
console.log(payment);
//Showing the payment after clicking the calculate button.
const parent = document.querySelector('#monthly-payment');
const div = document.createElement('div');
div.innerText = payment;
parent.appendChild(div);

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
