function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

// get inner text value
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

// update total
function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}

// update total balance
function updateBalance(amount, isAdd) {
    const previousBalanceTotal = getInnerTextValue('balance-total');
    let newBalanceTotal;
    if (isAdd == true) {
        newBalanceTotal = previousBalanceTotal + amount;
    }
    else {
        newBalanceTotal = previousBalanceTotal - amount;
    }
    document.getElementById('balance-total').innerText = newBalanceTotal;
}
// handle the deposite button
document.getElementById('deposite-button').addEventListener('click', function () {
    const amount = getInputValue('deposite-input');
    if (amount > 0) {
        updateTotal('deposite-total', amount);
        updateBalance(amount, true);
    }
});

// handle the withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount < balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
});