
const quotes = [
    "The only way to do great work is to love what...",
    "Life is what happens when you're busy making other plans",
    "The future belongs to those who bilieve in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy",
    "Get busy living or get busy dying",
    "You only live once, but if you do it right, once is enough",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to goal, not to people or things.",
    "Out,damned spot",
    "We imagine tha when we are thrown out of our usual ruts all is lost, it is only then tha what is new and good begins.There is much before us."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while(true){
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
    // setTimeout( generateQuote(),3000)
}


 setInterval(myFunction, 1000);

 function myFunction() {
    let d = new Date();

    document.getElementById("demo").innerHTML = 
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
 }

