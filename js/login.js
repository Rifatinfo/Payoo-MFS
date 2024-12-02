
document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);

    if(phoneNumber.length ===  11  && pinNumber.length === 5){
      console.log('You are logged in');
      window.location.href = '/home.html';
    }
    else{
        alert('Please provided  pin maximum 5 digit and  Number maximum 11 digit');
    }
});