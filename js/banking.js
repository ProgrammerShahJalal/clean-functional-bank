function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceText = balanceTotal.innerText;
    // const previousBalanceTotalAmount = parseFloat(balanceText);
    const previousBalanceTotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotalAmount + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotalAmount - amount;
    }
}

document.getElementById('deposite-button').addEventListener('click', function () {
    // const depositeInput = document.getElementById('deposite-input');
    // const depositeAmountText = depositeInput.value; 
    // const depositeAmount = parseFloat(depositeAmountText);

    // get and update deposite total
    /* const depositeTotal = document.getElementById('deposite-total');
    const depositeText = depositeTotal.innerText;
    const previousdepositeTotalAmount = parseFloat(depositeText);

    depositeTotal.innerText = previousdepositeTotalAmount + depositeAmount; */

    // update balance total
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(balanceText);
    balanceTotal.innerText = previousBalanceTotalAmount + depositeAmount; */
    const depositeAmount = getInputValue('deposite-input');
    if (depositeAmount > 0) {
        updateTotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }
});
// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    // get and update withdraw total
    /*  const withdrawTotal = document.getElementById('withdraw-total');
     const withdrawText = withdrawTotal.innerText;
     const withdrawTotalAmount = parseFloat(withdrawText);
 
     withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;
  */

    // update balance total after withdraw
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceText = balanceTotal.innerText;
     const previousBalanceTotalAmount = parseFloat(balanceText);
     balanceTotal.innerText = previousBalanceTotalAmount - withdrawAmount; */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
});
