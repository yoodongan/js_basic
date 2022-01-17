const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    paintGreetings(username);
    localStorage.setItem("username", username);
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
    greeting.innerText = `Hello ${username} , Welcome !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

