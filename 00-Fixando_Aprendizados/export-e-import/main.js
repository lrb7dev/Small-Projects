// main.js

// Importação Padrão (Default Import): 
// O nome 'Saudacao' pode ser QUALQUER COISA, mas ele recebe o export default.
import Saudar from './utils.js'; 

// Importação Nomeada (Named Import): 
// Os nomes devem CORRESPONDER exatamente aos nomes exportados.
import { soma, PI } from './utils.js';

// Também podemos importar tudo de uma vez:
// import * as Utils from './utils.js'; 
// console.log(Utils.soma(2, 3));

// --- Lógica Principal ---

const valor1 = 10;
const valor2 = 5;

// 1. Usando a função importada
const resultadoSoma = soma(valor1, valor2);

// 2. Usando a constante importada
const areaCirculo = PI * (2 * 2); // Exemplo de uso de PI

// 3. Usando a função default importada
const mensagem = Saudar('Usuário');

// Montando o texto para o DOM
const textoFinal = `${mensagem} ${resultadoSoma} \n(PI usado para cálculo: ${PI})`;

// Atualiza o DOM
document.getElementById('resultado').innerText = textoFinal;