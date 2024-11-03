const computerScienceWords = [
    "algorithm", "array", "binary", "bit", "boolean", "bug", "byte", "cache",
    "class", "cloud", "compiler", "cybersecurity", "data", "database",
    "debug", "encryption", "exception", "framework", "frontend", "function",
    "hardware", "HTML", "HTTP", "interface", "Java", "JavaScript",
    "kernel", "library", "Linux", "loop", "memory",
    "software", "SQL", "stack", "string", "syntax", "UI", "variable", "virtual",

];

const solvedWords = [];

const levels = {
    "Easy": 7,
    "Normal": 5,
    "Hard":2 
}

let defaultLevelName = "Normal";
let defaultLevelSec = levels[defaultLevelName];

let startButton = document.querySelector('.start');
let levelName = document.querySelector('.message .level');
let levelTime = document.querySelector('.message .time');
let input = document.querySelector('.input-text')
let solved = document.querySelector('.solved');
let total = document.querySelector('.total');
let finishedMassage = document.querySelector('.finished-massage')
levelName.innerHTML = defaultLevelName;
levelTime.innerHTML = defaultLevelSec;
let theWord = document.querySelector('.word')
let listWord = document.querySelector('.words')

let timeLeftSeconds = document.querySelector('.second');


timeLeftSeconds.innerHTML = defaultLevelSec;
total.innerHTML = computerScienceWords.length;


input.onpaste = function () {
    return false;
}

function startGame() {
    startButton.remove();
    input.focus();
    genWords()
}
function genWords() {
    let randomWord = computerScienceWords[Math.floor(Math.random() * computerScienceWords.length)]
    let indexWord = computerScienceWords.indexOf(randomWord);
    theWord.innerHTML = randomWord;
    computerScienceWords.splice(indexWord, 1);
    listWord.innerHTML=''
    for (let i = 0; i < computerScienceWords.length; i++){
        let newWord = document.createElement('div');
        let txt = document.createTextNode(computerScienceWords[i]);
        newWord.appendChild(txt);
        listWord.appendChild(newWord);
    }
    startPlay();
}

function startPlay() {
    timeLeftSeconds.innerHTML = defaultLevelSec;
    let start = setInterval(() => {
        timeLeftSeconds.innerHTML--;
        console.log(timeLeftSeconds);
        if (timeLeftSeconds.innerHTML === '0') {
            clearInterval(start);
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = '';
                getScore();
                if (computerScienceWords.length > 0) {
                    genWords();
                } else {
                    let massage = document.createElement('span');
                    let txt = document.createTextNode('Congratz');
                    massage.appendChild(txt);
                    theWord.className = 'good';
                    theWord.innerHTML = '';
                    theWord.appendChild(massage);
                    
                }
            } else {
                let massage = document.createElement('span');
                let txt = document.createTextNode('Game Over');
                massage.appendChild(txt);
                theWord.className = 'bad';
                theWord.innerHTML=''
                theWord.appendChild(massage);
            }
        }
    },1000)
}
function getScore() {
    solved.innerHTML++;
}
startButton.addEventListener('click', () => {
    startGame();
})
