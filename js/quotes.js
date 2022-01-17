const quotes = [
{
    quote : "Much of the best work of the world has been done against seeming impossibilities."
    ,author : "Dale Carnegie"
},
{
    quote : "Every cloud has a silver lining."
    ,author : "Souza"
},
{
    quote : "Don't dwell on the past."
    ,author : "Ace"
},
{
    quote : "Believe in yourself."
    ,author : "Brad"
},
{
    quote : "Follow your heart."
    ,author : "Cail"
},
{
    quote : "Seize the day."
    ,author : "Domino"
},
{
    quote : "You only live once."
    ,author : "Elegance"
},
{
    quote : "Love yourself."
    ,author : "Fred"
},
{
    quote : "Life is a journey"
    ,author : "Ralph Lauren"
},
{
    quote : "No pain, No gain."
    ,author : "Benjamin Franklin"
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = (quotes[parseInt(Math.random()*quotes.length)]);
console.log(todaysQuotes);

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;


