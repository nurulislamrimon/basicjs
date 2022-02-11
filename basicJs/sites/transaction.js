// input function
function getInputValue(inputId) {
    // input field
    const depositInputField = document.getElementById(inputId);
    const depositInputValue = depositInputField.value;
    const newDepositAmount = parseFloat(depositInputValue);
    // clearing deposit input
    depositInputField.value = "";
    return newDepositAmount;
}
// Calculation and update total
function totalUpdate(inputId, newAmount) {
    // exist deposit
    const exist = document.getElementById(inputId);
    const existText = exist.innerText;
    const existAmount = parseFloat(existText);
    // total deposit and assign
    exist.innerText = existAmount + newAmount;
}
// balance calculation and update
function balanceCalculationAndUpdate(newDeposit, operator) {
    // balance section
    const existBalance = document.getElementById("exist-balance");
    const existBalanceText = existBalance.innerText;
    const existBalanceAmount = parseFloat(existBalanceText);
    // total balance and assign
    if (operator == true) {
        existBalance.innerText = existBalanceAmount + newDeposit;
    }
    else {
        existBalance.innerText = existBalanceAmount - newDeposit;
    }
}
// depositCalculation
document.getElementById("deposit-button").addEventListener("click", depositCalculation);
function depositCalculation() {
    // input function
    const newDepositAmount = getInputValue("deposit-input");
    // totalCalculationAndUpdate
    totalUpdate("exist-deposit", newDepositAmount);
    // balanceCalculationAndUpdate
    balanceCalculationAndUpdate(newDepositAmount, true);
}
// withdrawCalculation
document.getElementById("withdraw-button").addEventListener("click", withdrawCalculation);
function withdrawCalculation() {
    // input function
    const newWithdrawAmount = getInputValue("withdraw-input");
    // totalCalculationAndUpdate
    totalUpdate("exist-withdraw", newWithdrawAmount)
    // balanceCalculationAndUpdate
    balanceCalculationAndUpdate(newWithdrawAmount, false);
}