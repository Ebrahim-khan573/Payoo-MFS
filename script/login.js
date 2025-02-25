document.getElementById('btn-login')
.addEventListener('click', function(event){
event.preventDefault()
const accountNumber = document.getElementById('account-number').value
const pin = document.getElementById('pin').value

if(accountNumber.length === 11){
    if(pin === '1234'){
        window.location.href="./main.html"
    }
    else{
        alert('pin thik nai')
    }
}
else{
    alert('Please provite valid number')
}
})