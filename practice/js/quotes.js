const quotes = [
    {
        quote : "I love you.",
        author: "YOODONGAN"
    },
    {
        quote : "YOU LOVE ME.",
        author: "SEUNGYEON"
    },
    {
        quote : "She loves me.",
        author: "DONGAN"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = (quotes[parseInt(Math.random()*quotes.length)]);
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;