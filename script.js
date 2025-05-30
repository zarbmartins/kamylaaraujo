const heartsContainer = document.getElementById('hearts');
const game = document.getElementById('game');
const question = document.getElementById('question');
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const mensagem = document.getElementById('mensagem');

const totalHearts = 15;       // total de corações (vermelhos + dourados)
const goldenHeartsCount = 3;  // quantidade de corações dourados

let goldenHeartsClicked = 0;

function startGame() {
    const containerWidth = heartsContainer.clientWidth;
    const containerHeight = heartsContainer.clientHeight;

    // Limpa container para evitar duplicar corações se startGame rodar mais de uma vez
    heartsContainer.innerHTML = '';

    // Resetar contadores e mensagens
    goldenHeartsClicked = 0;
    mensagem.textContent = '';
    question.style.display = 'none';
    game.style.display = 'block';

    // Criar os corações dourados
    for (let i = 0; i < goldenHeartsCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.backgroundImage = "url('criativo-67953e3a7ffa0img-2025-01-2567953e3a7ffa2-removebg-preview.png')";
        
        heart.style.left = Math.random() * (containerWidth - 50) + 'px';
        heart.style.top = Math.random() * (containerHeight - 50) + 'px';

        heart.addEventListener('click', () => {
            if (heart.style.opacity === '0.5') return; // evita múltiplos cliques no mesmo coração

            goldenHeartsClicked++;
            heart.style.opacity = 0.5; // marca que foi clicado

            if (goldenHeartsClicked >= goldenHeartsCount) {
                game.style.display = 'none';
                question.style.display = 'block';
            }
        });

        heartsContainer.appendChild(heart);
    }

    // Criar os corações vermelhos restantes
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

// Função para resposta do botão "Sim"
btnSim.addEventListener('click', () => {
    mensagem.style.color = 'black';
    mensagem.textContent = 'Dividir a vida com você será um imenso privilégio. Te adoro 💖';
});

// Função para resposta do botão "Não"
btnNao.addEventListener('click', () => {
    mensagem.style.color = 'black';
    mensagem.textContent = 'Que pena, vai namorar comigo sim! Mulher minha não tem querer.';
});

window.onload = startGame;
