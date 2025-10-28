// 1. Referências aos elementos do DOM
const body = document.querySelector('body');
const corHexSpan = document.querySelector('#cor-hex');
const btnGerar = document.querySelector('#btn-gerar');

// --- Uso de Arrow Function #1: Função auxiliar para gerar um valor hexadecimal aleatório ---
/**
 * Gera um único componente hexadecimal (00 a FF) aleatório.
 * @returns {string} - Uma string de 2 caracteres hexadecimais.
 */
const gerarComponenteHex = () => {
    // Math.random() gera um float entre 0 (inclusivo) e 1 (exclusivo).
    // Multiplica por 256 para obter um número entre 0 e 255 (os 256 valores de um byte).
    // Math.floor() arredonda para o inteiro mais próximo.
    const valorDecimal = Math.floor(Math.random() * 256);

    // Converte para hexadecimal e garante que tenha 2 dígitos (preenche com '0' se necessário).
    return valorDecimal.toString(16).padStart(2, '0').toUpperCase();
};

// --- Uso de Arrow Function #2: Função principal para gerar a cor HEX completa ---
/**
 * Gera uma cor hexadecimal completa no formato #RRGGBB.
 * Utiliza 3x a função gerarComponenteHex.
 * @returns {string} - O código da cor hexadecimal.
 */
const gerarCorHex = () => {
    // Concatena os três componentes. Notação concisa: sem chaves e sem 'return' explícito.
    return `#${gerarComponenteHex()}${gerarComponenteHex()}${gerarComponenteHex()}`;
};

// --- Uso de Arrow Function #3: Listener de evento (demonstração de 'this' léxico) ---
/**
 * Função que atualiza a cor de fundo e o texto do display.
 */
const atualizarCor = () => {
    const novaCor = gerarCorHex();

    // 1. Atualiza o background do body
    body.style.backgroundColor = novaCor;

    // 2. Atualiza o texto que exibe o código da cor
    corHexSpan.textContent = novaCor;
};

// 4. Adiciona o Event Listener
// Usa uma Arrow Function como callback, que executa 'atualizarCor'
// (e implicitamente executa 'gerarCorHex' e 'gerarComponenteHex').
btnGerar.addEventListener('click', atualizarCor);

// Inicializa o projeto com uma cor aleatória
atualizarCor();