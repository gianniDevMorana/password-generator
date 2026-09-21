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
const lettersAndNumbers = characters.slice(0, characters.indexOf("9") + 1);
const lettersOnly = characters.slice(0, characters.indexOf("z") + 1);
const numbersOnly = characters.slice(characters.indexOf("0"), characters.indexOf("9") + 1);

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

function getRandomCharacter(charArray) {
  let randomChar = Math.floor(Math.random() * charArray.length);
  return charArray[randomChar];
}

function generatePassword(passwordLength) {
  const options = document.getElementById("customOptions").value;
  let randomPassword = "";

  let selectedArray = characters;

  if (options === "lettersNumbers") {
    selectedArray = lettersAndNumbers;
  } else if (options === "lettersOnly") {
   selectedArray = lettersOnly;
  } else if (options === "numbersOnly") {
    selectedArray = numbersOnly; 
  }

  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter(selectedArray);
  }

  password.textContent = randomPassword;

  return randomPassword;
}

password.addEventListener("click", function() {
  if (!password.textContent) return;

    navigator.clipboard.writeText(password.textContent);
    const popupText = document.getElementById("popup");
    popupText.classList.add("show");
    setTimeout(function() {
      popupText.classList.remove("show");
    }, 2000);
})