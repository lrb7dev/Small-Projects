// Objeto complexo com os dados do usuário
const userData = {
    id: 101,
    firstName: 'Luan',
    lastName: 'Rabelo',
    role: 'Desenvolvedor Frontend',
    company: 'LRB7DEV',
    contact: {
        email: 'lrb7dev@exemplo.com',
        phone: '99 99999-9999'
    },
    status: 'ativo'
};

// ----------------------------------------------------
// EXEMPLO DE DESTRUCTURING DE OBJETOS BÁSICO E ANINHADO
// ----------------------------------------------------

// 1. Desestruturação Básica: Extraindo 'firstName', 'role' e renomeando 'lastName' para 'sobrenome'
const { 
    firstName, 
    role, 
    lastName: sobrenome, // Renomeando a propriedade 'lastName' para a variável 'sobrenome'
    country = 'Brasil'  // Definindo um valor padrão para 'country'
} = userData;

// 2. Desestruturação Aninhada: Extraindo a propriedade 'email' do objeto aninhado 'contact'
const { 
    contact: { email } 
} = userData;

// ----------------------------------------------------
// APLICAÇÃO (Exibindo na tela)
// ----------------------------------------------------

const detailsDiv = document.getElementById('user-details');

// Usando as variáveis desestruturadas
const htmlContent = `
    <h2>${firstName} ${sobrenome}</h2>
    <p><strong>Cargo:</strong> ${role}</p>
    <p><strong>Empresa:</strong> ${userData.company}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>País (Padrão):</strong> ${country}</p>
`;

detailsDiv.innerHTML = htmlContent;

console.log("Destructuring aplicado com sucesso!");
console.log(`Nome: ${firstName}`);   // João
console.log(`Sobrenome: ${sobrenome}`); // Silva
console.log(`Email: ${email}`);     // joao.silva@exemplo.com
console.log(`País: ${country}`);    // Brasil (valor padrão usado pois não existe em userData)

// ----------------------------------------------------
// EXEMPLO DE DESTRUCTURING EM ARRAYS
// ----------------------------------------------------

const [prog1, prog2, ...rest] = ['JavaScript', 'HTML', 'CSS', 'Python', 'SQL'];

console.log(`\n--- Destructuring de Array ---`);
console.log(`Linguagem 1: ${prog1}`); // JavaScript
console.log(`Linguagem 2: ${prog2}`); // HTML
console.log(`Outras (Rest): ${rest}`); // ['CSS', 'Python', 'SQL']