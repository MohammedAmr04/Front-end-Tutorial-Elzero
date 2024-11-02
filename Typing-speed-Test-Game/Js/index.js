const computerScienceWords = [
    "algorithm", "array", "binary", "bit", "boolean", "bug", "byte", "cache",
    "class", "cloud", "compiler", "cybersecurity", "data", "database",
    "debug", "encryption", "exception", "framework", "frontend", "function",
    "hardware", "HTML", "HTTP", "inheritance", "interface", "Java", "JavaScript",
    "kernel", "library", "Linux", "loop", "machine learning", "memory", "method",
    "network", "node", "object", "open source", "operator", "packet", "parameter",
    "polymorphism", "Python", "recursion", "repository", "runtime", "server",
    "software", "SQL", "stack", "string", "syntax", "UI", "variable", "virtual",
    "web development"
];

const solvedWords = [];

const levels = {
    "Easy": 5,
    "Normal": 3,
    "Hard":2 
}

let defaultLevelName = "Normal";
let defaultLevelSec = levels[defaultLevelName];

let startButton = document.querySelector('.start');
let levelName = document.querySelector('.message .level');
let levelTime = document.querySelector('.message .time');
levelName.innerHTML = defaultLevelName;
levelTime.innerHTML = defaultLevelSec;
let theWord = document.querySelector('.word')
theWord.innerHTML = computerScienceWords[Math.floor(Math.random(computerScienceWords.length) )]


const total = document.querySelector('.total');
const solved = document.querySelector('.solved');
total.innerHTML = computerScienceWords.length;
solved.innerHTML = solvedWords.length;


document.querySelector('.start').addEventListener('click',startGame)