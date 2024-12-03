function showSectionById(id){
    document.getElementById('cashOut-form').classList.add('hidden');
    document.getElementById('addMoney-form').classList.add('hidden');
    document.getElementById('Transaction-History').classList.add('hidden');
    // show this when click this 
    document.getElementById(id).classList.remove('hidden');
}