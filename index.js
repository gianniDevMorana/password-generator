const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const PASSWORD_LENGTH_PREFIX = "Password length: ";

let password = document.getElementById("password");
let passwordLengthInput = document.getElementById("password-length");
const slider = document.getElementById("myRange");
passwordLengthInput.innerHTML = PASSWORD_LENGTH_PREFIX + slider.value;

slider.oninput = function () {
  passwordLengthInput.innerHTML = PASSWORD_LENGTH_PREFIX + this.value;
  generatePassword(this.value);
};

document.getElementById("generate").addEventListener("click", function () {
  generatePassword(slider.value);
});

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generatePassword(passwordLength) {
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter();
  }

  password.textContent = randomPassword;

  return randomPassword;
}
