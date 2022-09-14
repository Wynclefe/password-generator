const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstResultEl = document.getElementById("result-el-1st")
let secondResultEl = document.getElementById("result-el-2nd")




function randomChar() {
       let randomCharacter = Math.floor(Math.random()*characters.length)
       return characters[randomCharacter]
}

function randomLetters() {
       let randomLetters = Math.floor(Math.random()*53)
       return characters[randomLetters]
}

function btnEl() {
let firstPassword = ""
let secondPassword = ""
    for (let i = 0; i < 15; i++) {
         firstPassword += randomChar()
    }  
    for (let i = 0; i < 15; i++) {
         secondPassword += randomChar()
    }
firstResultEl.textContent = firstPassword
secondResultEl.textContent = secondPassword
}

function noSymbolEl() {
let firstPassword = ""
let secondPassword = ""
    for (let i = 0; i < 15; i++) {
         firstPassword += randomLetters()
    }  
    for (let i = 0; i < 15; i++) {
         secondPassword += randomLetters()
    }
firstResultEl.textContent = firstPassword
secondResultEl.textContent = secondPassword
}





