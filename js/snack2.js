// # Snack 2
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

const displayElement = document.getElementById('display');


const firstWord = prompt('Inserisci una parola').trim();
const secondWord = prompt('Inserisci una seconda parola').trim();

let message = "L'ordine delle parole è ";

if (firstWord.length === 0 || secondWord === 0) {
    message = 'Errore. Devi inserire almeno 2 parole e/o il termine inserito non è valido.';
} else {
    if (firstWord.length > secondWord.length) {
        message += firstWord + ' ' + secondWord;
        console.log(firstWord, secondWord);
    } else if (firstWord.length < secondWord.length) {
        message += secondWord + ' ' + firstWord;
        console.log(secondWord, firstWord);
    } else {
        message = 'Le parole hanno la stessa lunghezza di caratteri.'
        console.log('Le parole hanno la stessa lunghezza di caratteri.');
    }
}

console.log(message);
displayElement.innerText = message;