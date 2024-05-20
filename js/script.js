

const gridEl = document.querySelector('section.grid'); //Variabile per il container

const playButton = document.querySelector('button'); //Variabile per bottone play

const scoreEl = document.getElementById('punteggio');

playButton.addEventListener('click', function() {
    newGame(100, gridEl);
})




function newGame (cellsNumber, containerElement) {
    containerElement.innerHTML = ""; //svuoto la griglia
    let punteggio = 0; 
    scoreEl.textContent = '';
    let bombsArray = getBombs(cellsNumber, 16); //chiamo la funzione per generare bombe
    for (let i = 0; i < cellsNumber; i++){
        const squareEl = document.createElement('article');
        squareEl.classList.add('square');
        squareEl.append(i + 1);
        squareEl.addEventListener('click', function(){
            if (bombsArray.includes(i + 1)){
                squareEl.classList.add('bomb');
                let celle = document.getElementsByClassName('square');
                for (let i = 0; i < bombsArray.length; i++){
                    let num = bombsArray[i] - 1;
                    celle[num].classList.add('bomb')
                }
            } else {
                squareEl.classList.add('safe');
                punteggio += 1;
                scoreEl.textContent = punteggio;
            }            
            console.log(squareEl.textContent)
        });
        gridEl.appendChild(squareEl);
    }
    
}









function getBombs (cellsNumber, bombsNumber) { //Funzione per creare la posizione casuale delle bombe
    const bombsArray = [];
    while (bombsArray.length < bombsNumber) { 
        let bombPosition = Math.floor(Math.random() * cellsNumber + 1);
        if (!bombsArray.includes(bombPosition)) {
            bombsArray.push(bombPosition);
        }
    }
    return bombsArray;
}




