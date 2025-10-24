const questions = [
    // Nível Fácil (Perda: -2 pontos) - Perguntas 1 a 5
    {
        question: "Qual civilização antiga construiu as pirâmides de Gizé?",
        options: ["Romanos", "Gregos", "Egípcios", "Maias", "Incas"],
        answer: "Egípcios",
        level: "easy"
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "Benjamin Franklin", "John Adams"],
        answer: "George Washington",
        level: "easy"
    },
    {
        question: "Em que ano a República foi proclamada no Brasil?",
        options: ["1822", "1889", "1900", "1850", "1870"],
        answer: "1889",
        level: "easy"
    },
    {
        question: "Qual Império foi governado por Júlio César?",
        options: ["Império Persa", "Império Romano", "Império Bizantino", "Império Mongol", "Império Otomano"],
        answer: "Império Romano",
        level: "easy"
    },
    {
        question: "Onde começou a Revolução Industrial?",
        options: ["França", "Alemanha", "Estados Unidos", "Inglaterra", "Itália"],
        answer: "Inglaterra",
        level: "easy"
    },

    // Nível Médio (Perda: -4 pontos) - Perguntas 6 a 10
    {
        question: "Qual foi o principal motivo da Guerra dos Cem Anos?",
        options: ["Disputa religiosa", "Controle do Canal de Suez", "Sucessão do trono francês", "Expansão marítima", "Disputa territorial na América"],
        answer: "Sucessão do trono francês",
        level: "medium"
    },
    {
        question: "Quem foi a rainha que governou a Inglaterra durante a derrota da Invencível Armada Espanhola?",
        options: ["Maria I", "Vitória", "Catarina de Aragão", "Isabel I", "Ana"],
        answer: "Isabel I",
        level: "medium"
    },
    {
        question: "Qual evento é considerado o estopim da Primeira Guerra Mundial?",
        options: ["Invasão da Polônia", "Afundamento do Lusitania", "Assassinato do Arquiduque Francisco Ferdinando", "Crise dos Balcãs", "Tratado de Versalhes"],
        answer: "Assassinato do Arquiduque Francisco Ferdinando",
        level: "medium"
    },
    {
        question: "Quem liderou a expedição que realizou a primeira circunavegação da Terra?",
        options: ["Cristóvão Colombo", "Vasco da Gama", "Pedro Álvares Cabral", "Fernão de Magalhães", "James Cook"],
        answer: "Fernão de Magalhães",
        level: "medium"
    },
    {
        question: "Qual movimento artístico e cultural marcou a transição da Idade Média para a Idade Moderna?",
        options: ["Barroco", "Iluminismo", "Reforma Protestante", "Renascimento", "Romantismo"],
        answer: "Renascimento",
        level: "medium"
    },

    // Nível Difícil (Perda: -8 pontos) - Perguntas 11 a 15
    {
        question: "Qual imperador romano dividiu o império em Ocidente e Oriente?",
        options: ["Augusto", "Nero", "Constantino", "Diocleciano", "Adriano"],
        answer: "Diocleciano",
        level: "hard"
    },
    {
        question: "O que foi o 'Grande Salto Adiante' na China?",
        options: ["Um programa de exploração espacial", "Uma política de industrialização e coletivização", "Uma campanha militar contra Taiwan", "Um movimento de reforma educacional", "Um período de grande crescimento democrático"],
        answer: "Uma política de industrialização e coletivização",
        level: "hard"
    },
    {
        question: "Qual o nome do famoso Código de Leis da Mesopotâmia?",
        options: ["Código de Drácon", "Código de Têmis", "Código de Ur-Nammu", "Código de Hammurabi", "Código de Manu"],
        answer: "Código de Hammurabi",
        level: "hard"
    },
    {
        question: "Em que ano ocorreu a Queda de Constantinopla, evento que é frequentemente citado como o fim da Idade Média?",
        options: ["1492", "1517", "1453", "1347", "1066"],
        answer: "1453",
        level: "hard"
    },
    {
        question: "Qual pensador iluminista escreveu 'O Contrato Social'?",
        options: ["Voltaire", "Montesquieu", "Denis Diderot", "Jean-Jacques Rousseau", "John Locke"],
        answer: "Jean-Jacques Rousseau",
        level: "hard"
    }
];

// Variáveis de estado do jogo
let playerName = '';
let currentScore = 150;
let currentQuestionIndex = 0;
const MIN_SCORE_TO_CONTINUE = 126; // Limite para Game Over

// Elementos do DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const scoreDisplay = document.getElementById('score-display');
const displayPlayerName = document.getElementById('display-player-name');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackEl = document.getElementById('feedback');
const finalMessageEl = document.getElementById('final-message');
const finalScoreEl = document.getElementById('final-score');

/**
 * Inicia o jogo, pega o nome e exibe a primeira pergunta.
 */
function startGame() {
    playerName = document.getElementById('playerName').value.trim();
    if (playerName === "") {
        alert("Por favor, digite seu nome para começar!");
        return;
    }

    // Oculta tela de início e mostra tela do quiz
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    // Atualiza placar
    displayPlayerName.textContent = playerName;
    scoreDisplay.textContent = currentScore;

    loadQuestion();
}

/**
 * Carrega a próxima pergunta no DOM.
 */
function loadQuestion() {
    if (currentQuestionIndex >= questions.length || currentScore < MIN_SCORE_TO_CONTINUE) {
        return finishGame(); // Acabou o quiz ou Game Over
    }

    const q = questions[currentQuestionIndex];

    // Limpa feedback anterior e opções
    feedbackEl.textContent = '';
    optionsContainer.innerHTML = '';

    // Atualiza número da pergunta e texto
    questionNumberEl.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length} (Nível: ${q.level.toUpperCase()})`;
    questionTextEl.textContent = q.question;

    // Cria os botões de opção
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        // Adiciona um listener que chama a função de checar resposta
        button.onclick = () => checkAnswer(option, q.answer, q.level, button);
        optionsContainer.appendChild(button);
    });
}

/**
 * Checa a resposta do jogador, atualiza o placar e avança para a próxima pergunta.
 * @param {string} selectedOption Opção escolhida pelo jogador.
 * @param {string} correctAnswer Resposta correta.
 * @param {string} level Nível da pergunta ('easy', 'medium', 'hard').
 * @param {HTMLElement} clickedButton O botão que foi clicado.
 */
function checkAnswer(selectedOption, correctAnswer, level, clickedButton) {
    const isCorrect = selectedOption === correctAnswer;
    const allOptions = optionsContainer.querySelectorAll('.option-btn');

    // Desabilita todos os botões para evitar múltiplos cliques
    allOptions.forEach(btn => btn.disabled = true);

    // Destaque visual da resposta
    allOptions.forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn === clickedButton && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Lógica de Pontuação e Feedback
    if (isCorrect) {
        feedbackEl.textContent = "Resposta Correta! Sem perda de pontos.";
    } else {
        let pointsLost = 0;
        switch (level) {
            case 'easy':
                pointsLost = 2;
                break;
            case 'medium':
                pointsLost = 4;
                break;
            case 'hard':
                pointsLost = 8;
                break;
        }
        currentScore -= pointsLost;
        scoreDisplay.textContent = currentScore;
        feedbackEl.textContent = `Resposta Errada! Você perdeu ${pointsLost} pontos.`;
    }

    // Verifica Game Over
    if (currentScore < MIN_SCORE_TO_CONTINUE) {
        // Delay para o jogador ver o feedback antes de ir para a tela final
        setTimeout(() => finishGame(true), 1500);
    } else {
        // Avança para a próxima pergunta após um delay
        currentQuestionIndex++;
        setTimeout(loadQuestion, 1500);
    }
}

/**
 * Finaliza o jogo e mostra a tela de resultado.
 * @param {boolean} isGameOver Indica se o jogo terminou por Game Over.
 */
function finishGame(isGameOver = false) {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    let finalScore = currentScore;
    let finalMessage = "";

    if (isGameOver) {
        // 2.0.3.1 - Penalidade por perguntas não respondidas
        const remainingQuestions = questions.length - currentQuestionIndex;
        const penalty = remainingQuestions * 10;
        finalScore = 150 - penalty; // A pontuação real começa do 150 inicial

        finalMessage = `Oh não, ${playerName}! Você atingiu a pontuação mínima de 126 e recebeu um **Game Over!** Sua pontuação inicial era 150. Você perdeu ${penalty} pontos de penalidade por não responder as ${remainingQuestions} perguntas restantes.`;

    } else {
        // Se todas as 15 perguntas foram respondidas
        finalMessage = `Parabéns, ${playerName}! Você completou o Quiz de História!`;
    }

    finalMessageEl.innerHTML = finalMessage;
    finalScoreEl.textContent = finalScore;
}

// Inicialmente, apenas a tela de início é visível (controlado pelo HTML/CSS)
