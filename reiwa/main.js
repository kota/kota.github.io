var isInAction = false;
var remainingCards;
var currentCard;
var timer;
var comTimer;
var playerCards;
var comCards;
var waits = {"easy": 400, "normal": 150, "hard": 50};
var difficulty;

function reset() {
  $(".card").show();
  $(".score-image").hide();
  $(".start-button").show();
  $("#display").hide();

  $(".start-button").show();
  $("#display").hide();
  remainingCards = [0,1,2,3,4];
  playerCards = [];
  comCards = [];
}

function start(e) {
  reset();
  $(".start-button").hide();
  $("#display").show();
  difficulty = e.currentTarget.getAttribute('data-difficulty');
  console.log("difficulty="  + difficulty);
  startRound();
}

function showResult() {
  $(".result-image").hide();
  playerCards.forEach(function(card) {
    $("#result-image" + card).show();
  });
  $(result).fadeIn();
}

function startRound() {
  count = 3;
  function showCount(count) {
    $("#display-text").text(count);
    $("#next-char").hide();
    $("#display-text").show();
  }

  function showReiwa() {
    $("#display-text").hide();
    var rand = Math.floor(Math.random() * remainingCards.length);
    var path = "images/rei" + remainingCards[rand] + ".PNG";
    currentCard = remainingCards[rand];
    remainingCards.splice(rand,1);

    $("#next-char").attr({"src":path});
    $("#next-char").show();
    startCom();
  }

  timer = setInterval(function() {
    count -= 1;
    if (count == 0) {
      clearInterval(timer);
      showReiwa();
      isInAction = true;
    } else {
      showCount(count)
    }
  }, 1000);
  showCount(count);
}

function startCom() {
  var rand = Math.floor(Math.random() * 500);
  console.log(waits[difficulty]);
  var wait = (remainingCards.length + 1) * waits[difficulty];
  comTimer = setTimeout(function(){
    if(isInAction) {
      isInAction = false;
      $("#player2Img").attr({"src":"images/player_2_1.PNG"});
      setTimeout(function() {
        $("#player2Img").attr({"src":"images/player_2_0.PNG"});
        if(remainingCards.length == 0) {
          showResult(); 
        } else {
          startRound();
        }
      }, 400);
      $("#score2-char" + currentCard).show();
      $("#card" + currentCard).hide();

    }
  }, wait + rand);
}

$(function() {
  $(".card").on('click', function(e){
    if(isInAction) {
      $("#player1Img").attr({"src":"images/player_1_1.PNG"});
      setTimeout(function() {
        $("#player1Img").attr({"src":"images/player_1_0.PNG"});
      }, 400);
      index = e.currentTarget.getAttribute('data-index');
      if(parseInt(index) == currentCard) {
        clearTimeout(comTimer);
        isInAction = false;
        $("#score1-char" + index).show();
        $(e.currentTarget).hide();
        playerCards.push(index);
        if(remainingCards.length == 0) {
          showResult(); 
        } else {
          startRound();
        }
      }
    }
  });

  $(".start-button").on('click', start);
  $("#result").on('click', function(e){
    $(e.currentTarget).hide();
    reset();
  })
  reset();
});
