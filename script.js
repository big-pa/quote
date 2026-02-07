/* random quote generator */

let slam = ["'Success is not final, failure is not fatal.'"
,"'Do what you can, with what you have, where you are.'"
,"'Dream big and dare to fail.'"
,"'Stay hungry, stay foolish.'"
,"'Turn your wounds into wisdom.'"
,"'Knowledge is power.'"
,"'The best way to get started is to quit talking and begin doing.'"
,"'The only limit to our realization of tomorrow is our doubts of today.'"
,"'In the middle of every difficulty lies opportunity.'"
,"'Happiness is not something ready made. It comes from your own actions.'"
,"'Life is what happens when you’re busy making other plans.'"
,"'Believe you can and you’re halfway there.'"];

let newQuote = document.getElementById("new-quote")

newQuote.addEventListener("click", function(){

    let random = Math.floor(Math.random()* 12);

console.log(random)

let randomNumber = slam[random];

console.log(randomNumber)

let randomAuthor = clam[random];

console.log(randomAuthor)

let quote = document.getElementById("quote");

quote.innerHTML = randomNumber;

let quotel = document.getElementById("author");

quotel.innerHTML = randomAuthor;

})

/* random author generator */

let clam = ["Winston Churchill"
,"Theodore Roosevelt"
,"Norman Vaughan"
,"Steve Jobs"
,"Oprah Winfrey"
,"Francis Bacon"
,"Walt Disney"
,"Franklin D. Roosevelt"
,"Albert Einstein"
,"Dalai Lama"
,"John Lennon"
,"Theodore Roosevelt"];


