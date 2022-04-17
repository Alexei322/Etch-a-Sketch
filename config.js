const containerSelect = document.querySelector('.container');
const square = document.createElement('div');
square.setAttribute('class', 'square');



let drawBoxes = function (userNumber = 64) {
    if((userNumber <= 100) && (userNumber >= 0)) {
        for(let i = 0; i < userNumber; i++) {
            const containerSelect = document.querySelector('.container');
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            containerSelect.appendChild(square); 
        }
        const squareSelect = document.getElementsByClassName('square');
        for(i = 0; i< squareSelect.length; i ++) {
            squareSelect[i].addEventListener('mouseover', function(e) {
                squareSelect[i].classList.toggle('squareHover')
    })};
    } else {
        alert("Enter a number between 0 and 100!");
        
    }  
};
drawBoxes();

const squareSelect = document.getElementsByClassName('square');
for(let i = 0; i< squareSelect.length; i ++) {
    squareSelect[i].addEventListener('mouseover', function(e) {
        squareSelect[i].classList.toggle('squareHover')
    })};


prompt = () => window.prompt("Enter a value below 100");

const buttonSelect = document.querySelector(".topButton");


