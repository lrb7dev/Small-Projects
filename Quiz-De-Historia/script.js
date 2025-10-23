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
