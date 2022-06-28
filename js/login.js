'use strict';

const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input:nth-child(1)');
const greetings = document.querySelector('.greetings');

const CLASSNAME_HIDDEN = 'hidden';
const USER_KEY = 'user'; 

const savedUser = localStorage.getItem(USER_KEY);

const writeGreetings = (parameter)=>{ 
    greetings.innerText = `Hello, ${parameter}`;
};

const onLogin = (event)=>{
    event.preventDefault();
    const user = loginInput.value;
    loginForm.classList.add(CLASSNAME_HIDDEN);
    localStorage.setItem(USER_KEY, user);
    writeGreetings(user);
};

if(savedUser){
    writeGreetings(savedUser);
}else{
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener('submit', onLogin);
}

