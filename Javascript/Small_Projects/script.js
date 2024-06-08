document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        {
            text: "I do the very best I know - the very best I can; and I mean to keep on doing so until the end.",
            person: "Abraham Lincoln"
        },
        {
            text: "The only limit to our realization of tomorrow is our doubts of today.",
            person: "Franklin D. Roosevelt"
        },
        {
            text: "In the end, it's not the years in your life that count. It's the life in your years.",
            person: "Abraham Lincoln"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            person: "Eleanor Roosevelt"
        },
        {
            text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
            person: "William Butler Yeats"
        },
        {
            text: "The best way to predict your future is to create it.",
            person: "Peter Drucker"
        },
        {
            text: "It does not matter how slowly you go as long as you do not stop.",
            person: "Confucius"
        },
        {
            text: "The journey of a thousand miles begins with one step.",
            person: "Lao Tzu"
        },
        {
            text: "Believe you can and you're halfway there.",
            person: "Theodore Roosevelt"
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            person: "Winston Churchill"
        }
    ];

    const quoteText = document.querySelector('.quote');
    const quotePerson = document.querySelector('.person');
    const newQuoteButton = document.getElementById('new-quote');

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote() {
        const randomQuote = getRandomQuote();
        quoteText.textContent = `"${randomQuote.text}"`;
        quotePerson.textContent = randomQuote.person;
    }

    newQuoteButton.addEventListener('click', displayQuote);
});
