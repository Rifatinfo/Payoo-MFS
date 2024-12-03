// document.getElementById('btn-CashOut').addEventListener('click', function(e){
//     e.preventDefault();
//    document.getElementById('cashOut-form').classList.remove('hidden');
//    document.getElementById('addMoney-form').classList.add('hidden');
// });

// document.getElementById('btn-addMoney').addEventListener('click', function(e){
//     e.preventDefault();
//     document.getElementById('addMoney-form').classList.remove('hidden');
//     document.getElementById('cashOut-form').classList.add('hidden');
// });


// new
document.getElementById('btn-addMoney').addEventListener('click', function(){
    showSectionById('addMoney-form');
});
document.getElementById('btn-CashOut').addEventListener('click', function(){
    showSectionById('cashOut-form');
});
