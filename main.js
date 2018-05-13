$(document).ready(afterPageLoad);


    function afterPageLoad() {
        doublingArrayValues(gameArray);
        splittingArray(doubledArray,8);
        arrayRandomizer(splitArray)
        generateDivs();
        addEventListeners();
        
    };

    function addEventListeners() {
        $(".card-block").on('click',handleCardClick);
        // document.querySelector('#modalButton').addEventListener('click', showModal)

    }

    var gameArray = [
        {name: "buzz",
        image: 'images/card-buzz.jpg'},
        {name: "woody",
        image: 'images/card-woody.jpg'},
        {name: "jessie",
        image: 'images/card-jessie.jpg'},
        {name: "bullseye",
        image: 'images/card-bullseye.jpg'},
        {name: "hamm",
        image: 'images/card-hamm.jpg'},
        {name: "mr potato head",
        image: 'images/card-mrpotatohead.jpg'},
        {name: "mrs potato head",
        image: 'images/card-mrspotatohead.png'},
        {name: "aliens",
        image: 'images/card-aliens.jpg'},
        {name: "zurg",
        image: 'images/card-zurg.jpg'},
        {name: "peas in a pod",
        image: 'images/card-peas.jpg'},
        {name: "slinky dog",
        image: 'images/card-slinkydog.jpg'},
        {name: "t rexx",
        image: 'images/card-trex.jpg'},
        {name: "dolly",
        image: 'images/card-dolly.jpg'},
        {name: "lotso",
        image: 'images/card-lotso.jpg'},
        {name: "wheezy",
        image: 'images/card-wheezy.jpg'},        
    ]

    // function to take an array and double each value inside so the original array doesn't have to have repeated values
    var doubledArray = [];
    function doublingArrayValues (arrayToBeDoubled) {
        for (i=0; i < arrayToBeDoubled.length; i++) {
            doubledArray.push(arrayToBeDoubled[i]);
            doubledArray.push(arrayToBeDoubled[i]);
        }
    }

    // function to split an Array to a specific number of names (could use before or after doubled)
    // but mainly for use after doubling
    var splitArray = [];
    function splittingArray (someArray, splitCount) {
        splitArray = someArray.slice(0,splitCount);
    }

    // function for getting a set number of items randomly from an array 
    var randomizedArray = [];
    function arrayRandomizer (anyArray) {
        for (var i = anyArray.length -1; i>0; i--) {
            var randomIndex = Math.floor(Math.random() * i + 1);
            var temp = anyArray[i];
            anyArray[i] = anyArray[randomIndex];
            anyArray[randomIndex] = temp;
            randomizedArray = anyArray;
        }
    };

    // function to dynamically create divs for the game
    function generateDivs () {        
        for (var i=0;i<randomizedArray.length;i++) {
        var myCol = $('<div class="col-sm-3"></div>');
        var myPanel = $('<div class="card card-outline-info" id="cardName'+i+'Panel"></div>');
        var myCardBlock = $('<div class="card-block"></div>');
        // using the randomizedArray to input names
        var myCardTitleFace = $(`<div class="card-title face"><img class="pictures card-${randomizedArray[i].name}" src="${randomizedArray[i].image}"></div>`);
        var myCardTitleBack = $('<div class="card-title back"><img class="card-img" src="images/cardback.jpeg"></div>');
        myCardTitleFace.appendTo(myCardBlock);
        myCardTitleBack.appendTo(myCardBlock);
        myCardBlock.appendTo(myPanel);
        myPanel.appendTo(myCol);
        myCol.appendTo('.row');
        }
    }   

// function for matching cards
var firstClickedCard = null;
var secondClickedCard = null;
var totalPairs = 8;
var currentMatchCount = 0;
var firstGuess;
var secondGuess;
var matchedGuesses = [];
var clicked;
var count = 0;
function handleCardClick () {
    clicked = $(this).addClass("revealed");
if (firstClickedCard !== null && secondClickedCard !== null) {
    return;
}
if (firstClickedCard === null) {
    firstClickedCard = $(this);
    firstGuess = firstClickedCard.find('img').attr('src');
    if (matchedGuesses.includes(firstGuess)) {
        firstClickedCard = null;
    }
    else {
        firstClickedCard.addClass('revealed');
    }
}
else {
    secondClickedCard = $(this);
    secondGuess = secondClickedCard.find('img').attr('src');
    if (matchedGuesses.includes(secondGuess)) {
        secondClickedCard = null;
        return;
    } else {
        secondClickedCard.addClass('revealed');
        attempts += 1;
    }
    if (firstGuess === secondGuess) {
        matchedGuesses += 1;
        matches += 1;
        firstClickedCard = null;
        secondClickedCard = null;
    }
    else {  
        setTimeout(slowReveal, 1000)
    }
}
if ( matchedGuesses === totalPairs) {
    winnerAlert();
    setTimeout(slowReveal, 500)
    setTimeout(winnerAlert, 3000)
    setTimeout(resetGame, 2000)
}
else {
    return;
}
}


// for win put modal here
 function winnerAlert(){
     alert('You Won!')
 }

 function slowReveal() {
    if (firstClickedCard !== secondClickedCard) {
        $(firstClickedCard).removeClass('revealed');
        $(secondClickedCard).removeClass('revealed');
        firstClickedCard = null;
        secondClickedCard = null;
    }
}

var matches = 0;
var attempts = 0;
var accuracy = 0;
var gamesPlayed = 0;
// function for stats: 




    // };


      // resetting game
var resetGuesses = function resetGuesses() {
    firstGuess = null;
    secondGuess = null;
    totalPairs = 8;
    currentMatchCount = 0;
    firstClickedCard = null;
    secondClickedCard = null;
    matchedGuesses = [];
//     games_played += 1;
//     $('.gamesPlayed').text(games_played);
//     reset_stats();
//     display_stats();
};




    // MODAL STUFF BELOW
    function showModal(){
        document.querySelector('#modalShadow').style.display = "block"
    }




