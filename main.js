$(document).ready(afterPageLoad);
            
    function afterPageLoad() {
        generateDivs(16);
        addEventListeners();
    };

    function addEventListeners() {
        $(".card-block").click(handleCardClick);
        document.querySelector('#modalButton').addEventListener('click', showModal)

    }
    var clickedCards = [];
    function handleCardClick() {
        $(this).addClass("revealed");
        var clickedCard = this;
    }

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
    function generateDivs (numberOfDivs) {        
        for (var i=1;i<=numberOfDivs;i++) {
        var myCol = $('<div class="col-sm-3"></div>');
        // var myPanel = $('<div class="card card-outline-info" id="'+i+'Panel"><div class="card-block"><div class="card-title face"><img src="images/cardface-aliens.jpeg"></div><div class="card-title back"><img class="card-img" src="images/cardback.jpeg"></div></div>');
        var myPanel = $('<div class="card card-outline-info" id="'+i+'Panel"></div>');
        var myCardBlock = $('<div class="card-block"></div>');
        var myCardTitleFace = $('<div class="card-title face"><img class="card-img" src="images/cardface-aliens.jpeg"></div>');
        var myCardTitleBack = $('<div class="card-title back"><img class="card-img" src="images/cardback.jpeg"></div>');
        myCardTitleFace.appendTo(myCardBlock);
        myCardTitleBack.appendTo(myCardBlock);
        myCardBlock.appendTo(myPanel);
        myPanel.appendTo(myCol);
        myCol.appendTo('#contentPanel');
        }
    }   

    // function to match cards on click and stop after 2 cards are clicked

    function pairCheck (clickedCard1, clickedCard1) {
        if (clickedCard1 === clickedCard1) {
            console.log("match!")
        } else {
            console.log("try again")
        }
    }
//     function flip() {
//       if (!this.classList.contains('flipped') && flippedCards.length < 2) {
//         this.classList.toggle('flipped');
  
//         flippedCards.push(this);
  
//         if (flippedCards.length === 2) {
//           checkMatch();
//         }
//       }
//     }
  

    var testArray = ['buzz', 'woody', 'jessie', 'bullseye', 'hamm', 'mr potato head', 'mrs potato head', 'alien', 'zurg', 'peas', 'slinky dog', 't-rex', 'dolly', 'lotso', 'wheezy'];
    doublingArrayValues (testArray);
    splittingArray(doubledArray, 16);
    arrayRandomizer(splitArray);
    console.log (randomizedArray);



    // MODAL STUFF BELOW
    function showModal(){
        document.querySelector('#modalShadow').style.display = "block"
    }


    // $(".back").click(function() {
    //     $(".card").css("display", "none")
    // })

    



// (function() {
//     var countDown;
//     var timeLoss;
//     var scoreIncrementer;
//     var flippedCards;
//     var score = document.getElementsByClassName('score')[0];
//     var timer = document.getElementsByClassName('timer')[0];
//     var endGame = document.getElementsByClassName('game-over')[0];
  
//     function dealDeck() {
//       var card = document.getElementsByClassName('card');
//       var pics = ["url('images/100.jpg')", "url('images/101.jpg')", "url('images/102.jpg')", "url('images/103.jpg')", "url('images/104.jpg')", "url('images/105.jpg')", "url('images/106.jpg')", "url('images/107.jpg')", "url('images/100.jpg')", "url('images/101.jpg')", "url('images/102.jpg')", "url('images/103.jpg')", "url('images/104.jpg')", "url('images/105.jpg')", "url('images/106.jpg')", "url('images/107.jpg')"];
  
//       timeLoss = 59;
//       scoreIncrementer = 0;
//       flippedCards = [];
  
//       endGame.style.display = 'none';
  
//       shuffle(pics);
  
//       for (var i = 0; i < card.length; i++) {
//         if(card[i].classList.contains('flipped')) {
//           card[i].classList.toggle('flipped');
//         }
//         card[i].querySelector('.back').style.backgroundImage = pics[i];
//         card[i].addEventListener('click', flip);
//       }
//       score.innerText = '00';
  
//       startTimer();
//     }
  
//     function flip() {
//       if (!this.classList.contains('flipped') && flippedCards.length < 2) {
//         this.classList.toggle('flipped');
  
//         flippedCards.push(this);
  
//         if (flippedCards.length === 2) {
//           checkMatch();
//         }
//       }
//     }
  
//     function checkMatch() {
//       if (flippedCards[0].querySelector('.back').style.backgroundImage === flippedCards[1].querySelector('.back').style.backgroundImage) {
//         flippedCards = [];
  
//         score.innerText = '0' + ++scoreIncrementer;
//       }
//       else {
//         setTimeout(flipBack, 1500);
//       }
//     }
  
//     function flipBack() {
//       flippedCards[0].classList.toggle('flipped');
//       flippedCards[1].classList.toggle('flipped');
  
//       flippedCards = [];
//     }
  
//     function startTimer() {
//       timer.innerText = '1:00';
//       countDown = setInterval(decrementTime, 1000);
//     }
  
//     function decrementTime() {
//       if (timeLoss === 0) {
//         timer.innerText = '0:0' + timeLoss;
//         clearInterval(countDown);
//         finalize();
//       }
//       if (timeLoss < 10) {
//         timer.innerText = '0:0' + timeLoss;
//       }
//       if (timeLoss >= 10) {
//         timer.innerText = '0:' + timeLoss;
//       }
//       if (scoreIncrementer === 8){
//         clearInterval(countDown);
//         finalize();
//       }
//       timeLoss--;
//     }
  
//     function finalize() {
//       var restart = document.getElementsByTagName('button')[0];
//       restart.addEventListener('click', dealDeck);
  
//       endGame.style.display = 'flex';
  
//       if (scoreIncrementer === 8) {
//         endGame.querySelector('h1').innerText = 'you win';
//       }
//       else {
//         endGame.querySelector('h1').innerText = 'you lose';
//       }
//       endGame.querySelector('.final-score').innerText = 'score: ' + scoreIncrementer;
//       endGame.querySelector('.time').innerText = 'time left: ' + timeLoss + ' sec.';
//     }
  
//     function shuffle(array) {
//       for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//       return array;
//     }
  
//     dealDeck();
//   })();


// ---------------------------------------------------
// Secondary Trial of Cards
// ----------------------------------------------------- 

// var gameArray2 = ['buzz', 'woody', 'jessie', 'bullseye', 'hamm', 'mr potato head', 'mrs potato head', 'alien', 'zurg', 'peas', 'slinky dog', 't-rex', 'dolly', 'lotso', 'wheezy']
// var gameValues = [];
// var gameCardsID = [];
// var cardsFlipped = 0

// function gameCardsIDShuffle () {
//     var iterator = this.length
//     var randomIndex;
//     var tempArray;
//     while (--i > 0) {
//         randomIndex = Math.floor(Math.random() * (iterator+1));
//         tempArray = this[randomIndex];
//         this[randomIndex] = this[iterator];
//         this[iterator]= tempArray
//     }
// }

// function createCardDivs () {
//     cardsFlipped = 0;
//     var output;
//     gameArray2.gameCardsIDShuffle();
//     for (var i = 0; i < gameArray2.length; i++){
//         output = output + '<div'
//     }
// }