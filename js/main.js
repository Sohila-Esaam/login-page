//signup
let nameInput = document.getElementById("nameIn");
let emailInInput = document.getElementById("emailIn");
let PasswordInInput = document.getElementById("PasswordIn");
let nameValidInput = document.querySelector('.nameValid');
let emailValidInInput = document.querySelector('.emailValidIn');
let passwordValidInInput = document.querySelector('.passwordValidIn');
let signupBtn = document.querySelector('.signup-btn');
let alreadyExists = document.querySelector('.alreadyExists');

let signUpList = [];
if(localStorage.getItem('signUpList') != null){
    signUpList = JSON.parse(localStorage.getItem('signUpList'));
}
console.log(signUpList);

signupBtn.addEventListener("click", function(){
    let newArr = signUpList.filter( (item) => {
        return item.email == emailInInput.value
    })
    console.log(newArr);
    if(newArr.length == 0){
        let inputs = {
            name: nameInput.value,
            email : emailInInput.value,
            password : PasswordInInput.value
        }
        if(emailInValid() && passwordInValid() && nameValid()){
            signUpList.push(inputs);
            localStorage.setItem('signUpList', JSON.stringify(signUpList));
            window.location.href = 'index.html'
        }   
    }else{
        alreadyExists.classList.remove('d-none');
    }
})

emailInInput.addEventListener("change", emailInValid)

function emailInValid(){
    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(emailRegex.test(emailInInput.value)){
        emailInInput.classList.add('is-valid');
        emailInInput.classList.remove('is-invalid');
        emailValidInInput.classList.add('d-none');
        return true;
    }else{
        emailInInput.classList.remove('is-valid');
        emailInInput.classList.add('is-invalid');
        emailValidInInput.classList.remove('d-none');
        return false;
    }
}

PasswordInInput.addEventListener("change", passwordInValid)

function passwordInValid(){
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(passwordRegex.test(PasswordInInput.value)){
        PasswordInInput.classList.add('is-valid');
        PasswordInInput.classList.remove('is-invalid');
        passwordValidInInput.classList.add('d-none');
        return true;
    }else{
        PasswordInInput.classList.remove('is-valid');
        PasswordInInput.classList.add('is-invalid');
        passwordValidInInput.classList.remove('d-none');
        return false;
    }
}

nameInput.addEventListener("change", nameValid)

function nameValid(){
    let nameRegex = /^[a-zA-Z\-]+$/;
    if(nameRegex.test(nameInput.value)){
        nameInput.classList.add('is-valid');
        nameInput.classList.remove('is-invalid');
        nameValidInput.classList.add('d-none');
        return true;
    }
    else{
        nameInput.classList.remove('is-valid');
        nameInput.classList.add('is-invalid');
        nameValidInput.classList.remove('d-none');
        return false;
    }

}