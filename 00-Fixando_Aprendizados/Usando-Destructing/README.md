# 🧩 JavaScript Destructuring Assignment (Atribuição via Desestruturação)

Este projeto demonstra o uso da funcionalidade **Destructuring em JavaScript** para extrair dados de objetos complexos e arrays de forma concisa e legível.

A desestruturação é uma ferramenta poderosa do ES6 que simplifica o acesso e a atribuição de variáveis a partir de estruturas de dados.

## 🚀 Como Executar o Exemplo

Basta salvar os três arquivos (`index.html`, `style.css` e `script.js`) na mesma pasta e abrir o `index.html` em qualquer navegador web.

Alternativamente, você pode usar uma extensão como o "Live Server" no VS Code para visualizar o projeto.

## 📁 Estrutura do Projeto

├── index.html # Estrutura HTML da página. ├── style.css # Estilização CSS para melhor visualização. └── script.js # O coração do exemplo, onde o Destructuring é aplicado.

## ✨ Destaques do JavaScript (`script.js`)

O arquivo `script.js` contém a lógica principal e exemplifica as formas mais comuns de usar o Destructuring em um objeto de usuário aninhado.

### 1. Desestruturação de Objetos

O objeto `userData` é desestruturado para criar variáveis a partir de suas propriedades:

```javascript
const userData = {
    // ... dados
    contact: { email: '...' }
};

const { 
    firstName, 
    role, 
    lastName: sobrenome, // ✅ Renomeação de Propriedade
    country = 'Brasil'  // ✅ Valor Padrão
} = userData;

const { 
    contact: { email }  // ✅ Desestruturação Aninhada
} = userData;

Sintaxe	Explicação

firstName	Extração simples: a variável firstName recebe o valor de userData.firstName.
lastName: sobrenome	Renomeação: A propriedade lastName é extraída, mas o valor é atribuído à variável sobrenome.
country = 'Brasil'	Valor Padrão: Se a propriedade country não existir em userData, a variável country receberá o valor 'Brasil'.
contact: { email }	Aninhamento: Extrai diretamente a propriedade email de dentro do objeto aninhado contact.

2. Desestruturação de Arrays
Arrays são desestruturados por posição:

const [prog1, prog2, ...rest] = ['JavaScript', 'HTML', 'CSS', 'Python', 'SQL'];

SintaxeExplicação[prog1, prog2]As variáveis prog1 e prog2 recebem, respectivamente, o primeiro e o segundo elementos do array....restO Rest Operator coleta todos os elementos restantes do array e os armazena em um novo array chamado rest.

📖 Conceitos-Chave de Destructuring

Conceito	  | Tipo                 	            | Benefício
====================================================================================
Básico	      | Objeto {} ou Array []	            | Extração concisa de valores em uma única linha.
------------------------------------------------------------------------------------
Renomeação	  | Objeto {prop: newName}               |	Permite que a variável tenha um nome diferente da propriedade de origem.
------------------------------------------------------------------------------------
Valor Padrão  |	Ambos propertyName = defaultValue	| Previne valores undefined ao garantir um fallback caso a propriedade/elemento não exista.
------------------------------------------------------------------------------------
Aninhado	  | Objeto {outer: {inner}}	            | Acesso direto a propriedades em múltiplos níveis de aninhamento.
------------------------------------------------------------------------------------
Rest Operator |	Array [a, b, ...rest]	            | Captura os elementos restantes de um array em uma nova coleção.
====================================================================================
