document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    const addMoney =  document.getElementById('amount-to-add').value;
    console.log(addMoney);

    const pinNumberInput = document.getElementById('pin-number').value;
    console.log(pinNumberInput);

    if(pinNumberInput === '1234'){
       console.log('SuccessFully provided pin');
       const currentBalance =  document.getElementById('current-balance').innerText;
       const newBalance = parseFloat(currentBalance) + parseFloat(addMoney);

       document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('please Provided correct pin');
    }
});