var startGame = function() {
  var startMessage = "You Drew a" + getCard() + "and a" + getCard() + "n/ your total is:" + playerSum;
  if (playerSum = 21) {
    alert("Blackjack, you win!");
    startGame();
  } else {
    var startMessage = confirm("You Drew a" + getCard() + "and a" + getCard() + "n/ your total is:" + playerSum + "n/ Would you like to draw another card?")
    var continueGame = function() {
    var returnMessage = "You Drew a" + getCard() + "n/ your total is:" + playerSum;
    var playerChoice = confirm(returnMessage + "n/ Would you like to draw another card?");
    if (playerChoice = "yes" || startMessage = "yes") {
        if (playerSum = 21) {
          alert("Blackjack, you win!");
          startGame();
        } else {
          continueGame();
        }
      if (playerSum > 21) {
        startGame();
      } else {
      startGame();
      }
    }

    var usedCards = [];
    var playerSum = 0;

    var getCard = function() {
      let currentCard = cardNumber() + cardSuite();
      for (var i = 0; i < usedCards.length; i++) {}
        if (currentCard = usedCards[i]) {
          currentCard();
        }
        else {
          usedCards.push(currentCard);
          return currentCard;
        }
      }


    var cardNumber = function() {
      let randomNumber = Math.floor(Math.random() * (10) + 1);
      if (randomNumber = 1) {
        if (sum <= 10) {
          playerSum += 11;
        } else {
          playerSum += 1;
        }
        return "A"
      }
      if (randomNumber= 10) {
        sum += randomNumber;
        let randomTen = Math.random();
        if (randomTen < 0.3333) {
          return "K";
        }
        if (randomTen > 0.3333 && randomSuite < 0.6666) {
          return "Q";
        } else {
          return "J";
        }
      } else {
        sum += randomNumber;
        return randomNumber;
      }
    }

    var cardSuite = function() {
      let randomSuite = Math.random();
      if (randomSuite < 0.25) {
        return "S";
      }
      if (randomSuite > 0.25 && randomSuite < 0.5) {
        return "C";
      }
      if (randomSuite > 0.5 && randomSuite < 0.75) {
        return "D";
      } else {
        return "H";
      }
    }
  }
  }
}
