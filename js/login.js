//sarch: form submit reloding tthe page


//step 1 set event handler
// document.getElementById('button-login').addEventListener('click',function(event){
//     //step 2: prevent deafult beheaviour.
//     event.preventDefault();
//     console.log('login buttton click');

//     //step 3:get the phone no
//     const phonenumber = document.getElementById('phone-number').value;
//     console.log(phonenumber);

document.getElementById('button-login')
.addEventListener('click', function(event){
    event.preventDefault();

    // get phone number and pin 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // bad way to validate
    if(phoneNumber === '01609503460' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong phone number or pin.')
    }
});