

const gridEl = document.querySelector('section.grid'); //Variabile per il container

const playButton = document.querySelector('button'); //Variabile per bottone play

playButton.addEventListener('click', function() {
    newGame(100, gridEl);
})




function newGame (cellsNumber, containerElement) {
    containerElement.innerHTML = ""
    for (let i = 0; i < cellsNumber; i++){
        const squareEl = document.createElement('article');
        squareEl.classList.add('square');
        squareEl.append(i + 1);
        squareEl.addEventListener('click', function(){
            squareEl.classList.add('active');
            console.log(squareEl.innerText)
        });

        gridEl.appendChild(squareEl);

    }
}


function getBombs (cellsNumber, bombsNumber) { //Funzione per creare la posizione casuale delle bombe
    const bombsArray = [];
    while (bombPosition.lenght < bombsNumber) { 
    let bombPosition = Math.floor(Math.random() * cellsNumber + 1);
        if (!bombsArray.includes(bombPosition)) {
            bombsArray.push(bombPosition);
        }
    }
    console.log(bombsArray);
    // return bombsArray;
}


