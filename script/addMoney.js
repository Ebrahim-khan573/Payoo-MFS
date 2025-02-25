document.getElementById('addMoney-btn')
.addEventListener('click', function(event){
event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertAmount = parseFloat(amount)
    const pin = document.getElementById('pin').value;
    const mainBalance = document.getElementById('main-balance').innerText
    const convertMainBalance = parseFloat(mainBalance)

    if(pin === '1234'){
        const sum = convertMainBalance + convertAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else{
        console.log('Wrong Pin Number')
    }
})