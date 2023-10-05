const chooseCarBtn = document.getElementById("chooseCarBtn");
chooseCarBtn.addEventListener("click", () => {
  const chosenCar = document.querySelector('input[name="selectCar"]:checked');
  const displayCarValue = document.getElementById("displayCarValue");

  displayCarValue.value = chosenCar.value;
});

const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", () => {
  const displayCarValue = parseFloat(document.getElementById("displayCarValue").value);
  const downPaymentValue = parseFloat(document.getElementById("downPaymentValue").value);
  const interestRateValue = parseFloat(document.getElementById("interestRateValue").value);

  const loanTerm = parseFloat(document.getElementById("loanTerm").value);
  const interestRate = interestRateValue / 100;

  if (isNaN(downPaymentValue) || isNaN(interestRateValue)) {
    carDetails.textContent = "Input a valid value.";
  } else {
    const carDetails = document.getElementById("carDetails");

    let downPayment = "";
    let amountFinanced = "";
    let monthlyPayment = "";

    downPayment = (displayCarValue * downPaymentValue) / 100;
    amountFinanced = displayCarValue - downPayment;
    monthlyPayment = (amountFinanced * interestRate) / loanTerm + amountFinanced / loanTerm;

    carDetails.innerHTML = `
    Down Payment: ${downPayment} <br>
    Amount Financed: ${amountFinanced} <br>
    Monthly Payment: ${monthlyPayment}
    `;
  }

  const includeInsurance = document.querySelector('input[name="includeInsurance"]:checked');
  alert(includeInsurance.value);
});
