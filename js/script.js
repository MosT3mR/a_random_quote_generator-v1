/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student : Othman Alomair
******************************************/


/*** 
 * `quotes` Storing the qoutes in array of objects
***/
const quotes = [
  {
    quote: `Software is like sex: It’s better when it’s free.`,
    source: "Linus Torvalds",
    citation: "Speach in the web",
    year: 2000,
    tag: "Fun"
  },
  {
    quote: `Everyone hears what you say.
    Friends listen to what you say.
    Best friends listen to what you don’t say.`,
    source: "MosT3mR",
    citation: "Twitter",
    year: 2014,
    tag: "Random"
  },
  {
    quote: `Talk is cheap. Show me the code.`,
    source: "Linus Torvalds",
    citation: "Speach in the web",
    year: 2001,
    tag: "Fun"
  },
  {
    quote: `Websites promote you 24/7: No employee will do that.`,
    source: "Paul Cookson",
    tag: "inspirational"
  },
  {
    quote: `Website without visitors is like a ship lost in the horizon.`,
    source: "Dr. Christopher Dayagdag",
    tag: "inspirational"
  },
  {
    quote: `It’s not a bug. It’s an undocumented feature!`,
    source: "Anonymous",
    tag: "Fun"
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuotes(arr) {
  const randomNum = Math.floor(Math.random() * quotes.length); // this line gets random number based on how many qoutes we have in the array
  const theSelcetedQoute = arr[randomNum];
  return theSelcetedQoute;
}


/***
 * `printQuote` function
***/

function printQuote() {

  // this function gets us random background colors (its inside the printQuote function so we get random colors without refreshing the page)
  const randomBG = function(){
    let theMath = Math.floor(Math.random() * 255); // 255 because the rgb color starts from 0 to 255
    return theMath;
  }
  const rBG = `rgb(${randomBG()}, ${randomBG()}, ${randomBG()})`; // ex rgb(155, 30, 160)

  // caling the getRandomQuotes function inside the printQuote and storing it inside const
  const theNewQout = getRandomQuotes(quotes);
  const theQuote = theNewQout.quote;
  const theSource = theNewQout.source;
  const theCitation = theNewQout.citation;
  const theYear = theNewQout.year;
  const theTag = theNewQout.tag;


  let theNewHTML = `
  <p class="quote">${theQuote}</p>
  <p class="source">${theSource}`;
  
  // if there is citation we will and it the html
  if(theCitation){
    theNewHTML += `<span class="citation">${theCitation}</span>`;
  }

    // if there is year we will and it the html
  if(theYear){
    theNewHTML += `<span class="year">${theYear}</span>`;
  }

      // if there is tag we will and it the html
  if(theTag){
    theNewHTML += `<span> "${theTag}"</span>`;
  }

    theNewHTML += `</p>`;
    document.body.style.backgroundColor = rBG; // MDN - changing the background color and making the value = the function randomBG
    document.getElementById('quote-box').innerHTML = theNewHTML; // using innerHTML to change the qoute in the index.html
    return theNewHTML;
}


 // setting a timer to execute the function every 5 sec
 let timer = setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);