// # Snack 1
// L’utente inserisce due numeri in successione, con due prompt.Il software stampa il maggiore.

const displayElement = document.getElementById('display1');

const userFirstNumber = parseInt(prompt('Inserisci un primo numero').trim());
const userSecondNumber = parseInt(prompt('Inserisci un secondo numero').trim());
console.log(`Il primo numero è ${userFirstNumber}`);
console.log(`Il secondo numero è ${userSecondNumber}`);

let message = "Il numero maggiore è ";

if (isNaN(userFirstNumber) || isNaN(userSecondNumber)) {
    message = "Uno dei valori non è valido."
} else {
    if (userFirstNumber > userSecondNumber) {
        message += userFirstNumber;
    } else if (userSecondNumber > userFirstNumber) {
        message += userSecondNumber;
    } else {
        message = 'I numeri sono uguali.';
    }
}

console.log(message);
displayElement.innerText = message;