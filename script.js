let btnGuess = document.getElementById('btn-guess');
let btnAgain = document.getElementById('play-again');
let outputMessage = document.getElementById('message');
let allContent = document.querySelector('.content');

let number = Math.floor(Math.random() * 15) + 1;

btnGuess.addEventListener('click', function() {
    let userInput = document.getElementById('input-number').value;
    if(userInput>number) {
        outputMessage.innerHTML = 'Broj je previsok, probaj uneti manji broj.';
    } else if(userInput<number) {
        outputMessage.innerHTML = 'Broj je mali, probaj uneti neki veći broj.';
    } 
    if (userInput == number)  {
        outputMessage.innerHTML = `Pogodili ste tačan broj! ✔🎉 Broj koji sam zamislio je broj ${number}`;
        btnAgain.classList.remove('hidden');
        allContent.classList.add('hidden');
    }
    console.log(number);
});

btnAgain.addEventListener('click', function () {
    window.location.reload();
});