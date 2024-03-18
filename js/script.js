/* 
Campo minato

- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
- Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
- In seguito l'utente clicca su una cella: se abbiamo calpestato una bomba la cella si colora di rosso e la partita termina.
- Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
- La partita termina cliccando su una bomba o rivelando tutte le celle che non sono bombe.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/


//INPUT DATI
//Genero il campo da gioco
const mainGrid = document.querySelector('#grid');

//Genero l'array per le bombe
let arrayBombs = [];
console.log(arrayBombs);
//ciclo for per i 16 numeri random
for (let i = 1; i <= 16; i++){
    //Evoco la funzione
    const bombs = getRndInteger(1, 100);
        //Funzione per i 16 numeri random da 1 a 100
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
        //Se nell'array non è incluso il numero, lo pushi
        if (!arrayBombs.includes(bombs)){
            //Pusho i numeri random dentro l'array
            arrayBombs.push(bombs);
        } else {
            //Torna indietro a contare
            i--;
        }
}

//ELABORAZIONE DATI
//richiamo il pulsante play
const msBtn = document.querySelector(".ms-btn");
//Una volta cliccato il tasto play mi fa vedere il campo da gioco
msBtn.addEventListener('click', function() { 
    mainGrid.innerHTML = '';
    for(let i = 1; i <= 100; i++) {
        const newSquare = generateSquare(i);
        mainGrid.append(newSquare);
        
        //OUTPUT DATI
        // Gestione del click su ogni qudrato
        newSquare.addEventListener('click', function() {
            //se il numero cliccato è presente nell'array delle bombe
            if (arrayBombs.includes(i)){
                this.classList.add('ms-bgc-red');
                alert("Hai perso");
            } else{
                this.classList.add('ms-bgc-lightblue');
            }
        });
        } 
})

        //FUNCTION : GENERO UN QUADRATO
// number: rappresenta un numero
// return: elemento del dom che rappresenta un quadrato
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    return newSquare;
}