//BLACKJACK

//the image cards are pulled from
var img = new Image();
img.src = "deckOfCards1.jpg";

//allows image to load before trying to access it
img.onload = function() {
  card(deck[nextRandomCard], true, "player");
};

//used as a constant variable for card shown in game
var constant = 100;

//dimensions of card on image
var cardWidth = 122;
var cardHeight = 174;

//used to track cards that are still in deck and who has what cards
var deck = [];
var playerHand = [];
var dealerHand = [];

//fills deck with "cards"
for(s = 0; s < 4; s++){
  for(i = 1; i <= 13; i++){
    deck.push(i + "" + s);
  }
}

//prepares next random card number
var nextRandomCard = getRandomCard();

//shows the random card
function card(currCard, shown, side){
  //player
  if(side == "player"){
    playerHand.push(currCard);
    console.log(currCard);
    drawImagePlayer(currCard, 100, 100);
    //dealer
  }else if(side == dealer){
    dealerHand.push(currCard);
    drawImageDealer(currCard, 50, 50);
  }else{
  }
};

//returns random number within the deck
function getRandomCard(){
  num = Math.floor(Math.random() * deck.length);
  console.log(deck[num]);
  remove(deck, num);
  console.log(deck);
  return num;
};

//removes chosen random card from deck
function remove(deck, card) {
  return deck.slice(0, card).concat(deck.slice(card + 1));
};

//shows the card(s) dealt to the dealer
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

//shows the card(s) dealt to the player
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
