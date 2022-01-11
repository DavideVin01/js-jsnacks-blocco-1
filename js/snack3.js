// # Snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;
let isValid = true;

for (let i = 0; i < 10; i++) {
    const askNumbers = parseInt(prompt('Scrivi 10 numeri'));
    console.log(`Numero inserito: ${askNumbers}`);
    if (isNaN(askNumbers)) {
        isValid = false;
    } else {
        sum += askNumbers;
    }
}

if (isValid) {
    console.log('La somma dei numeri è', sum);
} else {
    console.log('Uno dei valori non è valido.');
}