'use strict';

const proverbs = [
    {
        text: 'Never confuse a single defeat with a final defeat.',
        author: 'Scott Fitzgerald'
    },
    {
        text: 'People rarely succeed at anything unless they have fun doing it.',
        author: 'Dale Carnegie'
    },
    {
        text: 'Imagination is more import!ant than knowledge.',
        author: 'Albert Einstein'
    },
    {
        text: 'Do not try be original, just try to be good.',
        author: 'Paul Rand'
    },
    {
        text: 'Time is gold.',
        author: 'Anonymous'
    },
];

const proverbTitle = document.querySelector('.proverb span:nth-child(1)');
const proverbAuthor = document.querySelector('.proverb span:nth-child(2)');

const randomProverbs = proverbs[Math.floor(Math.random() * proverbs.length)];

proverbTitle.innerText = randomProverbs.text;
proverbAuthor.innerText = randomProverbs.author;


