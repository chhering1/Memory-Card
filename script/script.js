let time, newTime;
let min, mn;
let sec, sc;
let startTime, endTime;
let cards = document.querySelectorAll('.card-inner');
let firstClickedCard = document.querySelectorAll('.card-inner')[0]
let result = document.querySelector('.result')
let cardsContainer = document.querySelectorAll('.card')
let hasFlippedCard = false; //means hasflippedcard doesnt exist
let firstCard, secondCard;
let matchedCards = [];
let cardBack = document.querySelectorAll('.card-back')
let shuffleBtn = document.querySelector('#shuffleBtn')

//shuffle funktion
let j = 0;
let myArray = ["A","B","C","D","E","F","B","A","H","Z","C","K","G","D","E","K","F", "Z","H","G"]
cardBack.forEach( card => {
card.innerHTML = myArray[j]
j++;
})
//flip funktionen
function flipCard (e) { 
    // console.log(this)
    this.classList.add('flip');
    if (!hasFlippedCard) { // means hasflippedcard does exist
        //first click  
        hasFlippedCard = true;
        firstCard = this;
        console.log(firstCard)
    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;
        console.log(secondCard)
        checkForMatch();
    }
};

function checkForMatch () {firstCard.textContent == secondCard.textContent ? 
    setTimeout(() =>{ 
        disableCards(); 
        saveMatchedCards () 
    }, 1000 ) :  setTimeout (  () => {flipBackCards()  },1000) }

function disableCards () {
    firstCard.classList.add('flip')
    secondCard.classList.add('flip')
}

function getFirstClick () {
    let click = 0;
    if(click===0) {
     console.log('first click')
     time = new Date();
 hour = time.getHours()
 min= time.getMinutes();
 sec = time.getSeconds()
startTime = hour + ':' + min + ':' + sec
console.log(startTime)
    }
}

function saveMatchedCards () {
    matchedCards.push(firstCard)
    matchedCards.push(secondCard)
   if (matchedCards.length == 20) {
   newTime = new Date();
   hr = newTime.getHours()
    mn= newTime.getMinutes();
   sc = newTime.getSeconds()
   endTime = hr + ':' + mn + ':' + sc
   let mindiff = (mn - min)
   let secdiff = (sec - sc)
   console.log(min, sec)
   result.style.display = 'block'
   shuffleBtn.style.display = 'block'
   result.textContent = 'Good job! you have taken ' + mindiff + 'minutes and ' + secdiff + ' seconds to complete it'
    }
}

function flipBackCards () {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
}

shuffleBtn.addEventListener('click',  function  () {
    const mixedResults = myArray.sort(() => Math.random() - 0.5);
    const endResults = mixedResults.slice(0, 20)
    let j = 0
       cardBack.forEach( card => {
        card.innerHTML = endResults[j]
        j++;
        })
        let cards = document.querySelectorAll('.card-inner');
        cards.forEach(card => {
            card.classList.remove('flip')
            result.style.display= "none";
        })
        matchedCards = [];
});


cards.forEach( card => card.addEventListener('click', flipCard));
firstClickedCard.addEventListener('click', getFirstClick);

