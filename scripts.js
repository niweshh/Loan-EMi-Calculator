function calculateEMI() {
  const loanAmount = document.getElementById("loanAmount").value;
  const interestRate = document.getElementById("interestRate").value;
  const loanTenure = document.getElementById("loanTenure").value;

  if (!loanAmount || !interestRate || !loanTenure) {
    alert("Please fill in all fields");
    return;
  }

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTenure * 12;

  const emi =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  document.getElementById("emiResult").textContent = emi.toFixed(2);
}
