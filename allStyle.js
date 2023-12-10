/*

*/

const allQuotes = [
  "“Be yourself; everyone else is already taken.”",

  " “Be the change that you wish to see in the world.” ",

  " “If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” ",

  "“Life is what happens to us while we are making other plans.”",
];

// quote:
// author: "Oscar Wilde ",
// quote:
// author: "Mahatma Gandhi",
// quote:
// author: "j k rowling",
// quote:
// author: "Allen Saunders",

function quoteEmilRandom() {
  const shuffledArray = allQuotes.sort((a, b) => 0.5 - Math.random());
  // document.getElementById("paraQuote").innerHTML = shuffledArray;
  for (var i = 0; i < shuffledArray.length; i++) {
    document.getElementById("paraQuote").innerHTML = shuffledArray[i];
  }
}
