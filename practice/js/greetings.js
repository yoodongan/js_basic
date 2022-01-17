const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const CLASS_HIDDEN = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginFrom.classList.add(CLASS_HIDDEN);
    paintGreetings(username);

}
function paintGreetings(username){
    greeting.innerText = username;
    greeting.classList.remove(CLASS_HIDDEN);
}

loginFrom.addEventListener("submit", onLoginSubmit);


