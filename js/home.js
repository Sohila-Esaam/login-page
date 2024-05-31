let userName = document.getElementById('name');
let logoutBtn = document.getElementById('logout-btn');

let loginUser = JSON.parse(localStorage.getItem('loginUser'));
let name = loginUser[0].name;

userName.innerHTML = name;

logoutBtn.addEventListener("click", function(){
    localStorage.removeItem('loginList');
    window.location.href = 'index.html';
})

console.log(loginUser);

