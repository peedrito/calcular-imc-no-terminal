const readline = require('readline');

// Objeto para armazenar dados pessoais do usuário
let dadosPessoais = {
  nome: null,
  altura: null,
  peso: null,
  idade: null,
};

// Chama função do Node.js
const rl = readline.createInterface({
  input: process.stdin, // Lê o terminal
  output: process.stdout, // Armazena resposta terminal
});

// Funções para imprimir no console--------------
function informarNome() {
  rl.question('Pergunta 1/4: Qual seu nome? ', (nome) => {
    dadosPessoais.nome = nome;
    informarAltura();
  });
}

function informarAltura() {
  rl.question('Pergunta 2/4: Qual sua altura? ', (altura) => {
    dadosPessoais.altura = altura;
    informarPeso();
  });
}

function informarPeso() {
  rl.question('Pergunta 3/4: Qual seu peso? ', (peso) => {
    dadosPessoais.peso = peso;
    informarIdade();
  });
}

function informarIdade() {
  rl.question('Pergunta 4/4: Qual sua idade? ', (idade) => {
    dadosPessoais.idade = idade;
    calcularIMC();
  });
}

function calcularIMC() {
  // Fórmula para calcular IMC
  const IMC = dadosPessoais.peso / Math.pow(dadosPessoais.altura, 2).toFixed();

  // Mensagem de aguardo
  console.log(`\nBeleza, já estamos com suas informações ${dadosPessoais.nome}, aguarde alguns segundos enquanto nosso sistema computa seus dados...`);

  // Condições para informar usuário sobre seu IMC
  setTimeout(() => {
    if (IMC <= 16.9) {
      console.log(`Nosso sistema calculou que seu IMC é: ${IMC.toFixed(2)}\nInformação do IMC: Muito abaixo do peso.`);
    } else if (IMC <= 17.8) {
      console.log(`Nosso sistema calculou que seu IMC é: ${IMC.toFixed(2)}\nInformação do IMC: Abaixo do peso.`);
    } else if (IMC <= 24.9) {
      console.log(`Nosso sistema calculou que seu IMC é: ${IMC.toFixed(2)}\nInformação do IMC: Peso normal.`);
    } else if (IMC <= 29.9) {
      console.log(`Nosso sistema calculou que seu IMC é: ${IMC.toFixed(2)}\nInformação do IMC: Acima do peso.`);
    } else if (IMC <= 34.9) {
      console.log(`Nosso sistema calculou que seu IMC é: ${IMC.toFixed(2)}\nInformação do IMC: Obesidade grau I.`);
    } else if (IMC <= 40) {
      console.log(`Nosso sistema calculou que seu IMC é: ${IMC.toFixed(2)}\nInformação do IMC: Obesidade grau II.`);
    } else if (IMC > 40) {
      console.log(`Nosso sistema calculou que seu IMC é: ${IMC.toFixed(2)}\nInformação do IMC: Obesidade grau III.`);
    }

    rl.close(); // Fim da interação no terminal
  }, 5000); // Tempo para imprimir dados no terminal
}

// Interface / Chamando funções
console.log('Bem-vindo (a) ao nosso sistema IMC!');
informarNome();