const containerSelect = document.querySelector('.container');
const square = document.createElement('div');
square.setAttribute('class', 'square');



let drawBoxes = function (userNumber = 64) {
    const containerSelect = document.querySelector('.container');
    containerSelect.style.setProperty('grid-template-columns', `repeat(${userNumber}, 1fr)`);
    containerSelect.style.setProperty('grid-template-rows', `repeat(${userNumber}, 1fr)`);
    if(containerSelect.firstChild) {
        while(containerSelect.firstChild) {
            containerSelect.removeChild(containerSelect.firstChild);
        }
        }

    for(let i = 0; i < (userNumber * userNumber); i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        containerSelect.appendChild(square); 
    };

    const squareSelect = document.getElementsByClassName('square');
    [...squareSelect].forEach(element => {
        element.addEventListener('mouseover', (e)=>{
            element.classList.toggle('squareHover');
        })
    })
    
};

drawBoxes(64);

let prompt = function() {
    let returnNum = window.prompt("Enter a value below 100");
    if((returnNum <= 100) && (returnNum >= 0)) {
        drawBoxes(returnNum);
    } else {
        alert("Enter a number between 0 and 100!");
    }
   
};

const buttonSelect = document.querySelector(".topButton");
buttonSelect.addEventListener('click', prompt);


