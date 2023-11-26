const quotes = [
    "Quote 1",
    "Quote 2",
    "Quote 3",
];

const quoteContainer = document.getElementById('quote-text');
const randomIndex = Math.floor(Math.random() * quotes.length);

quoteContainer.innerText = quotes[randomIndex];