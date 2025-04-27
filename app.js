// Etapa 4 e 5

let arrayOfRandomNumbers = [];
let maxNumber = 50;
let secretNumber = randomNumber();
let guesses = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function showInitialMessage() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
}

showInitialMessage();

function verificarChute() {
    let guess = document.querySelector('input').value;
    if (guess == secretNumber) {
        exibirTextoNaTela('h1', 'Acertou!');
        let wordGuesses = guesses > 1? 'tentativas' : 'tentativa';
        let messagesGuesses = `Você descobriu o número secreto com ${guesses} ${wordGuesses}!`;
        exibirTextoNaTela('p', messagesGuesses);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (guess > secretNumber) {
            exibirTextoNaTela('p', 'O número secreto é menor'); 
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        guesses++;
        clearSpace();
    }
}

function randomNumber() {
    let chooseNumber = parseInt(Math.random() * maxNumber + 1);
    let quantityElementsArray = arrayOfRandomNumbers.length;
    if (quantityElementsArray == maxNumber) {
        arrayOfRandomNumbers = [];
    }

    if (arrayOfRandomNumbers.includes(chooseNumber)) {
        return randomNumber();
    } else {
        arrayOfRandomNumbers.push(chooseNumber);
        console.log(arrayOfRandomNumbers);
        return chooseNumber;
    }
}

function clearSpace() {
    guess = document.querySelector('input');
    guess.value = '';
}

function restartGame() {
    secretNumber = randomNumber();
    clearSpace();
    guesses = 1;
    showInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}