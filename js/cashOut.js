document.getElementById('btn-cashOut-money').addEventListener('click', function(e){
    e.preventDefault();
    const lessMoney = getInputFieldById('amount-to-cashOut');
    console.log(lessMoney);

    const pinNumberInput = getInputFieldById('pin-number-cashOut');
    console.log(pinNumberInput);

    if(pinNumberInput === 1234){
       console.log('SuccessFully provided pin');
       const currentBalance =  gettextFieldValueById('current-balance');
       const newBalance = currentBalance - lessMoney;

       document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('please Provided correct pin');
    }
});