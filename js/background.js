'use strict';

const imags = [
    'background_01.jpg',
    'background_02.jpg',
    'background_03.jpg',
    'background_04.jpg'
]

const createImg = document.createElement('img');
const backgroundImg = document.body.appendChild(createImg);

backgroundImg.style.background = `url(./img/${imags[Math.floor(Math.random() * imags.length)]})`;
backgroundImg.classList.add('background-img');
