import './style.css'

let textarea = document.getElementById("text");
let wordsTag = document.getElementById("words");
let lettersTag = document.getElementById("letters");
let clearButton = document.getElementById("clear");

let words = 0;
let letters = 0;

textarea.addEventListener("input", (e) => {
  let text = textarea.value;
  words = text.trim().split(" ").filter(w => w.length > 0).length;
  wordsTag.textContent = words;
  letters = text.trim().split(" ").filter(w => w.length > 0).join("").split("").length;
  lettersTag.textContent = letters;
})

clearButton.addEventListener("click", (e) => {
  textarea.value = "";
  words = 0;
  letters = 0;
  wordsTag.textContent = 0;
  lettersTag.textContent = 0;
})



