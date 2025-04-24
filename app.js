// Etapa 1

// let title = document.querySelector('h1');
// title.innerHTML = 'Jogo do número secreto';

// let paragraph = document.querySelector('p');
// paragraph.innerHTML = 'Escolha um número entre 1 e 10';

// let city_name;
// let soma1;
// let soma2;
// function verificarChute() {
//     console.log('O botão foi assionado.');
//     alert('Eu amo JS');
//     city_name = prompt('Nome de uma cidade do Brasil');
//     alert(`Estive em ${city_name} e lembrei de você.`);
//     soma1 = parseInt(prompt('Adicione um número inteiro'));
//     soma2 = parseInt(prompt('Adicione outro número inteiro'));
//     let solution = soma1 + soma2;
//     alert(`A soma desses dois números é igual a ${solution}`);
// }

// Etapa 2

// let secretNumber = randomNumber();

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1', 'Jogo do número secreto');
// exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

// function verificarChute() {
//     let guess = document.querySelector('input').value;
//     console.log(guess == secretNumber);
// }

// function randomNumber() {
//     return parseInt(Math.random() * 10 + 1);
// }

// Etapa 3

// let secretNumber = randomNumber();
// let guesses = 1;

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// function showInitialMessage() {
//     exibirTextoNaTela('h1', 'Jogo do número secreto');
//     exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
// }

// showInitialMessage();

// function verificarChute() {
//     let guess = document.querySelector('input').value;
//     if (guess == secretNumber) {
//         exibirTextoNaTela('h1', 'Acertou!');
//         let wordGuesses = guesses > 1? 'tentativas' : 'tentativa';
//         let messagesGuesses = `Você descobriu o número secreto com ${guesses} ${wordGuesses}!`;
//         exibirTextoNaTela('p', messagesGuesses);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         if (guess > secretNumber) {
//             exibirTextoNaTela('p', 'O número secreto é menor'); 
//         } else {
//             exibirTextoNaTela('p', 'O número secreto é maior');
//         }
//         guesses++;
//         clearSpace();
//     }
// }

// function randomNumber() {
//     return parseInt(Math.random() * 100 + 1);
// }

// function clearSpace() {
//     guess = document.querySelector('input');
//     guess.value = '';
// }

// function restartGame() {
//     secretNumber = randomNumber();
//     clearSpace();
//     guesses = 1;
//     showInitialMessage();
//     document.getElementById('reiniciar').setAttribute('disabled', true);
// }

// Etapa 4

let arrayOfRandomNumbers = [];
let secretNumber = randomNumber();
let guesses = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
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
    let chooseNumber = parseInt(Math.random() * 4 + 1);
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