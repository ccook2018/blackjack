//dealer
var canvasGA = document.getElementById("gameAreaDealer");
// canvasGA.addEventListener( 'click', processUserInput);
var contextGA = canvasGA.getContext("2d");
//player
var canvasGA2 = document.getElementById("gameAreaPlayer");
// canvasGA2.addEventListener( 'click', processUserInput);
var contextGA2 = canvasGA2.getContext("2d");

var cardWidth = 122;
var cardHeight = 174 ;
var constant = 100;
var x;
var img = new Image();
img.src = "deckOfCards1.jpg";
var temp = 0;
var amtCards = 0;
var count = 0;
var usedCards = [];

setTimeout( setupTable, 1000);

function randomCard(x){
  if(x == true){
    var randV = Math.floor(Math.random()*13);
    var randT = Math.floor(Math.random()*4);
    var placement;
    var blah = true;
    var place = (600 - ((constant*1.426)+constant))/2;
    console.log(randT);
    placement = place + amtCards*cardWidth;
    for(i = 0;i<usedCards.length;i++){
      if(usedCards[i] == randV + "." + randT){
        randV = Math.floor(Math.random()*13);
        randT = Math.floor(Math.random()*4);
        console.log("hit");
        randomCard();
      }
    }
    drawImagePlayer(randV, randT, placement, 50);
    amtCards++;
    count++;
  }else if(x == false){
    if(count == 2){
      amtCards = 0;
    }
    var randV = Math.floor(Math.random()*13);
    var randT = Math.floor(Math.random()*4);
    var placement;
    var blah = true;
    var place = (600 - ((constant*1.426)+constant))/2;
    console.log(randT);
    placement = place + amtCards*cardWidth;
    for(i = 0;i<usedCards.length;i++){
      if(usedCards[i] == randV + "." + randT){
        randV = Math.floor(Math.random()*13);
        randT = Math.floor(Math.random()*4);
        console.log("hit");
        randomCard();
      }
    }
    drawImageDealer(randV, randT, placement, 50);
    amtCards++;
    count++;
  }
};

function setupTable(){
  randomCard(true);
  console.log(usedCards);
  randomCard(true);
  console.log(usedCards);
  randomCard(false);
  console.log(usedCards);
  randomCard(false);
  console.log(usedCards);
};

function drawImageDealer(v, t, x, y){
  var c = document.getElementById("gameAreaDealer");
  var ctx = c.getContext("2d");
  var clipX = 2 + ((v*10.2)+ (cardWidth * v));
  var clipY = 2 + ((t * 11.35) + (cardHeight * t));
  ctx.drawImage(img, clipX, clipY, cardWidth, cardHeight, x, y, constant, constant*1.426);
  usedCards.push(v + "." + t);
};

function drawImagePlayer(v, t, x, y){
  var c = document.getElementById("gameAreaPlayer");
  var ctx = c.getContext("2d");
  var clipX = 2 + ((v*10.2)+ (cardWidth * v));
  var clipY = 2 + ((t * 11.35) + (cardHeight * t));
  ctx.drawImage(img, clipX, clipY, cardWidth, cardHeight, x, y, constant, constant*1.426);
  usedCards.push(v + "." + t);
};
