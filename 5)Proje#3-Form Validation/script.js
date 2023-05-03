const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


//aşagidakinin kısa yolu
function error(input,message){
    input.className = 'form-control error'
    const div = input.nextElementSibling;  
    //inputtan sonra ulaştığımız ilk elemana (<div> e) message yazar.
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input){
    input.className = 'form-control is-valid'
}

//password max min sınırlaması:
function inputLength (input,min,max) {
    if(input.value.length < min)
    {
        error(input, `${input.value} en az {min} karakter olmalıdır.`);
    }

    else if(input.value.length > max)
    {
        success(input);
    }
}

//password lerin eşleşmeme durumunu kontrol ettik.
function passwordControl(input1,input2){
    if(input1.value !== input2.value)
    {
        error(input2,'parolalar eşleşmiyor.');
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    inputLength(username,7,15); //username 7-15 karakter arasında olmalıdır dedik.
    inputLength(password,3,8);  //password 3-8 karakter arasında olmalıdır dedik.
    passwordControl(password,repassword);


    if(username.value === ''){
        username.className = 'form-control error'  
        //error diye class oluşturmak yerine is-invalid yazarsak da otomatik olarak eklenir.
    }
    else{  //formdaki username kısmı doldurulmuşsa yesil olsun borderları
        username.className = 'form-control noerror'
    }

    if(email.value === ''){
       error(email,'email zorunlu alandır.');
    }
    else{
        success(email);
    }

    if(password.value === ''){
        error(password,'passwoed zorunlu alandır.');
    }
    else{
        success(password);
    }

    if(repassword.value === ''){
       error(repassword,'repassword zorunlu alandır.');
    }
    else{
        success(repassword);
    }

});
