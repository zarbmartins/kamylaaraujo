const heartsContainer = document.getElementById('hearts');
const game = document.getElementById('game');
const question = document.getElementById('question');
const intermediate = document.getElementById('intermediate');
const btnContinuar = document.getElementById('btn-continuar');
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const mensagem = document.getElementById('mensagem');

const totalHearts = 15;
const goldenHeartsCount = 3;

let goldenHeartsClicked = 0;

function startGame() {
    const containerWidth = heartsContainer.clientWidth;
    const containerHeight = heartsContainer.clientHeight;

    heartsContainer.innerHTML = '';

    goldenHeartsClicked = 0;
    mensagem.textContent = '';
    question.style.display = 'none';
    intermediate.style.display = 'none';
    game.style.display = 'block';

    for (let i = 0; i < goldenHeartsCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.backgroundImage = "url('criativo-67953e3a7ffa0img-2025-01-2567953e3a7ffa2-removebg-preview.png')";
        
        heart.style.left = Math.random() * (containerWidth - 50) + 'px';
        heart.style.top = Math.random() * (containerHeight - 50) + 'px';

        heart.addEventListener('click', () => {
            if (heart.style.opacity === '0.5') return;

            goldenHeartsClicked++;
            heart.style.opacity = 0.5;

            if (goldenHeartsClicked >= goldenHeartsCount) {
                game.style.display = 'none';
                intermediate.style.display = 'block';
            }
        });

        heartsContainer.appendChild(heart);
    }

    const redHeartsCount = totalHearts - goldenHeartsCount;
    for (let i = 0; i < redHeartsCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.backgroundImage = "url('coracao_-removebg-preview.png')";

        heart.style.left = Math.random() * (containerWidth - 50) + 'px';
        heart.style.top = Math.random() * (containerHeight - 50) + 'px';

        heart.addEventListener('click', () => {
            heart.style.opacity = 0.3;
        });

        heartsContainer.appendChild(heart);
    }
}

// Botão da tela intermediária
btnContinuar.addEventListener('click', () => {
    intermediate.style.display = 'none';
    question.style.display = 'block';
});

// Função botão "Sim"
btnSim.addEventListener('click', () => {
    mensagem.style.color = 'black';
    mensagem.textContent = 'Muito obrigada por aceitar dividir a vida comigo! 💖';
});

// Função botão "Não"
btnNao.addEventListener('click', () => {
    mensagem.style.color = 'black';
    mensagem.textContent = 'Que pena, vai namorar comigo sim! Mulher minha não tem querer.';
});

window.onload = startGame;
