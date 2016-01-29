var canvasGA = document.getElementById("gameAreaDealer");
// canvasGA.addEventListener( 'click', processUserInput);
var contextGA = canvasGA.getContext("2d");

var canvasGA2 = document.getElementById("gameAreaPlayer");
// canvasGA2.addEventListener( 'click', processUserInput);
var contextGA2 = canvasGA2.getContext("2d");

var cardWidth = 122;
var cardHeight = 174;
var img = new Image();
img.src = "deckOfCards1.jpg";
img.onload = function() {
  card(deck[nextRandomCard], true, "player");
};

var constant = 100;

var deck = [];
var usedCards = [];
var playerHand = [];
var dealerHand = [];

for(s = 0; s < 4; s++){
  for(i = 1; i <= 13; i++){
    deck.push(i + "" + s);
  }
}

var nextRandomCard = getRandomCard();

function card(currCard, shown, side){
  //player
  if(side == "player"){
    playerHand.push(currCard);
    drawImagePlayer(currCard, 100, 100);
    //dealer
  }else if(side == dealer){
    dealerHand.push(currCard);
    drawImageDealer(currCard, 50, 50);
  }else{
  }
};

function getRandomCard(){
  num = Math.floor(Math.random() * deck.length);
  console.log(deck[num]);
  remove(deck, num);

  console.log(deck);
  return num;
};

function remove(deck, card) {
  return deck.slice(0, card).concat(deck.slice(card + 1));
};

function drawImageDealer(randomCard, x, y){
  var c = document.getElementById("gameAreaDealer");
  var ctx = c.getContext("2d");
  var suite = randomCard.substring(randomCard.length - 1, randomCard.length);
  var num = randomCard.substring(0, randomCard.length - 1);
  dealerHand.push(num + " " + suite);
  var clipX = 2 + ((num*10.2) + (cardWidth * num));
  var clipY = 2 + ((suite * 11.35) + (cardHeight * suite));
  console.log(" clipX: " + clipX + " clipY: " + clipY + " cardWidth: " + cardWidth + " cardHeight: " + cardHeight + " x: " + x + " y: " + y + " constant: " + constant);
  ctx.drawImage(img, clipX, clipY, cardWidth, cardHeight, x, y, constant, constant*1.426);
};

function drawImagePlayer(randomCard, x, y){
  var c = document.getElementById("gameAreaPlayer");
  var ctx = c.getContext("2d");
  var suite = randomCard.substring(randomCard.length - 1, randomCard.length);
  var num = randomCard.substring(0, randomCard.length - 1);
  playerHand.push(num + " " + suite);
  var clipX = 2 + ((num*10.2) + (cardWidth * num));
  var clipY = 2 + ((suite * 11.35) + (cardHeight * suite));
  console.log(" clipX: " + clipX + " clipY: " + clipY + " cardWidth: " + cardWidth + " cardHeight: " + cardHeight + " x: " + x + " y: " + y + " constant: " + constant);
  ctx.drawImage(img, clipX, clipY, cardWidth, cardHeight, x, y, constant, constant*1.426);
};
