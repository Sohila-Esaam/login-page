//login
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let emailValidInput = document.querySelector('.emailValid');
let notfound = document.querySelector('.notfound');
let passwordValidInput = document.querySelector('.passwordValid');
let loginBtn = document.querySelector('.login-btn');

let signUpList = [];
signUpList = JSON.parse(localStorage.getItem('signUpList'));
console.log(signUpList);

loginBtn.addEventListener("click", function(){
    let newArr = signUpList.filter( (item) => {
        return item.email == emailInput.value && item.password == passwordInput.value
    })
    localStorage.setItem('loginUser', JSON.stringify(newArr))
    if(newArr.length != 0){
        window.location.href = 'https://sohila-esaam.github.io/login-page/home.html'
    }
    else{
        let arrError = signUpList.filter( (item) => {
            return item.email == emailInput.value
        })
        if(arrError.length == 0){
            notfound.classList.remove('d-none');
        }
        if(arrError.length != 0){
            passwordValidInput.classList.remove('d-none');
        }
    }

})



