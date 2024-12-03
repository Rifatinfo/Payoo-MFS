document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    
    const addMoney = getInputFieldById('amount-to-add');
    const pinNumber = getInputFieldById('pin-number');
    // const cashOut = getInputFieldById('');
    // const cashOutPin = getInputFieldById('');
    if(pinNumber === Number(1234)){
        const balance = gettextFieldValueById('current-balance');
        const newBalance = balance + addMoney;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add the Money');
    }
})














