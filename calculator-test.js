
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 200000,
    years: 30,
    rate: 3.25
  };
  
  expect(calculateMonthlyPayment(values)).toEqual("870.00");
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 200000,
    years: 30,
    rate: 3.25
  };
  expect(calculateMonthlyPayment(values)).toEqual("870.41")
});

/// etc
