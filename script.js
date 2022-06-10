let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');
let charsert = 'abcdefghijklmopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%¨&&*()^}?{`12345677890-0=*/-.+,';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}


function generatePassword() {
    let pass = '';
    for (let i = 0, n = charsert.length; i <sliderElement.value; ++i) {
        pass += charsert.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert('Senha Copiada com sucesso!!!')
    navigator.clipboard.writeText(novaSenha);
}


