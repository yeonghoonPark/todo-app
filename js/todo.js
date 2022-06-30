'use strict';

const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-form input');
const toDoList = document.querySelector('.todo-list');

const TODO_KEY = 'item';

let toDoArray = new Array();

const saveTodo = (parameter)=>{
    localStorage.setItem(TODO_KEY, JSON.stringify(parameter));
};

const deleteToDo = (event)=>{
    const parentLi = event.currentTarget.parentNode;
    parentLi.remove();
    toDoArray = toDoArray.filter(item => item.id !== parseInt(parentLi.id));
    saveTodo(toDoArray);
};

const createTodo = (parameter)=>{
    const createLi = document.createElement('li');
    const createSpan = document.createElement('span');
    const createButton = document.createElement('button');
    toDoList.appendChild(createLi);
    createLi.prepend(createSpan);
    createLi.appendChild(createButton);
    createLi.id = parameter.id;
    createSpan.innerText = parameter.text;
    createButton.innerText = 'Delete';
    createButton.addEventListener('click', deleteToDo);
};

const onTodo = (event)=>{
    event.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        text: toDo,
        id: Date.now()
    };
    toDoArray.push(newToDoObj);
    createTodo(newToDoObj);
    saveTodo(toDoArray);
    
};

toDoForm.addEventListener('submit', onTodo);

const savedTodo = JSON.parse(localStorage.getItem(TODO_KEY));

if(savedTodo){
    toDoArray = savedTodo;
    savedTodo.forEach(createTodo);
};

