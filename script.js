let score = 0;
let valor = 10;
const scoreDisplay = document.getElementById('score');
const catButton = document.getElementById('catButton');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

catButton.addEventListener('click', (e) => {
    score++;
    scoreDisplay.textContent = score;

    // Efeito popup
    showPopup("+1", e.clientX, e.clientY);

    // Mensagens especiais
    if (score % valor === 0) {
        valor += 20
        message.textContent = `🎉 Uau! ${score} cliques!`;
        setTimeout(() => { message.textContent = ''; }, 2000);
    }

    // Som fofo
    playMeow();
});

resetButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = score;
    message.textContent = '🐾 Clique no gato!';
});

// Função para popup de +1
function showPopup(text, x, y) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.style.left = `${x - 20}px`;
    popup.style.top = `${y - 40}px`;
    popup.textContent = text;
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 700);
}

// Função para som
function playMeow() {
    const audio = new Audio('img/meow.mp3');
    audio.play();
}
