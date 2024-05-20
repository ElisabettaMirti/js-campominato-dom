// >Creo una costante per richiamare la griglia dall'html

//>Creo una costante per il bottone del play

// >Creo un ciclo per creare gli articoli-quadrati all'interno della griglia
//     >All'interno del ciclo, ogni elemento creato va poi appeso al contenitore
// >Aggiungo un ascoltatore che aggiunga una classe che dà background azzurro ogni volta che una cella viene cliccata e
//     un console.log che stampi il numero indice corrispondente

//>inserisco un eventListener per l'attivazione del bottone
    //>Prima di ricaricare la griglia, deve essere svuotato l'innerHTML
    //>Creo una nuova funzione con argomento il numero di caselle e il container che resetti il gioco
    //>Inserisco il ciclo for all'interno della funzione





const gridEl = document.querySelector('section.grid');

const playButton = document.querySelector('button');

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



