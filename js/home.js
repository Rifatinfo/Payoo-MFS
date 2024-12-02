document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    const addMoney =  document.getElementById('amount-to-add').value;
    console.log(addMoney);

    const pinNumberInput = document.getElementById('pin-number').value;
    console.log(pinNumberInput);
});