const words = ["monkey", "lion", "pancake", "amazing"];
const word = words[Math.floor(Math.random() * words.length)];
console.log(word);
const answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remaingLetters = word.length;
function playGame() {
  while (remaingLetters > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("jfhejhfjh");
    if (guess === null) {
      return;
    } else if (guess.length !== 1) {
      alert("Будь ласка введіть одну літеру.");
    } else {
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          remaingLetters--;
        }
      }
    }
  }
}
playGame();

alert(answerArray.join(" "));
alert("Хороша робота це слово: " + word);
