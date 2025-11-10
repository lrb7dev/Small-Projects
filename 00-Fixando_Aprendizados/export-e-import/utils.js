// utils.js

// Exportação Nomeada (Named Export): 
// Exportamos uma função chamada 'soma'
export function soma(a, b) {
    return a + b;
}

// Exportação Nomeada de uma constante
export const PI = 3.14159;

// Exportação Padrão (Default Export): 
// Exportamos APENAS UMA entidade como padrão.
// Útil para exportar a principal funcionalidade de um arquivo.
const saudacao = (nome) => `Olá, ${nome}! O resultado da soma é:`;

export default saudacao;