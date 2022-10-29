console.log("this is word scramble game");

const words = [
    {
        word: "pocket",
        hint: "A bag for carrying small items",
    },
    {
        word: "needle",
        hint: "A thin and sharp pin",
    },
    {
        word: "expert",
        hint: "A person with extenasive knowledge",
    },
    {
        word: "statement",
        hint: "A declaration of something",
    },
    {
        word: "second",
        hint: "A One-Sixth of minute",
    },
    {
        word: "library",
        hint: "A place containing collection of books",
    },
    {
        word: "friend",
        hint: "A person other than family",
    },
    {
        word: "field",
        hint: "Area of land for farming activities",
    },
    {
        word: "store",
        hint: "Large shop where goods are traded",
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour",
    },
    {
        word: "group",
        hint: "Number of objects or persons",
    },
    {
        word: "contry",
        hint: "A politically identified region",
    },
    {
        word: "expansion",
        hint: "The process of increase or grow",
    },
];
const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const refreshBtn = document.querySelector(".refresh-btn");
const checkBtn = document.querySelector(".check-btn");
const timeText = document.querySelector(".time b");
const inputField = document.querySelector("input");
let correctWord,timer;

const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return (timeText.innerText = maxTime);
        }
        clearInterval(timer);
        alert(`Time off!, ${correctWord.toUpperCase()} is a correct word`);
        initGame();
    }, 1000);
};

const initGame = () => {
    initTimer(30);
    inputField.value = "";
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    correctWord = randomObj.word.toLocaleLowerCase();

    hintText.innerHTML = randomObj.hint;
    wordText.innerHTML = wordArray.join("");
    console.log(randomObj);
};
initGame();
function checkWord() {
    let userInput = inputField.value.toLocaleLowerCase();
    if (userInput == "") {
        alert("Please enter a word to check");
    }
    if (userInput !== correctWord) {
        alert(`Oops! ${userInput} is not a correct word`);
    } else {
        alert(`Congrats! ${userInput} is a correct word`);
    }
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
