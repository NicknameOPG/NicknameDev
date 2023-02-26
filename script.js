//random word generator
function randomWord() {
  var word = "";
  var possible = "AZERTYUIOPMLKJHGFDSQWXCVBN1234567890azertyuoipmlkjhgfdsqwxcvbn";
  for(var i=0; i<5; i++){
    word +=possible.charat(Math.floor(Math.random()*possible.length));
  }
}
prompt(randomWord())