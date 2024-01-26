const readline = require('readline'); // Faz a requisição da leitura de linhas do terminal
let dadosPessoais = {
    nome: null,
    altura: null,
    peso: null,
    idade: null,
}

const rl = readline.createInterface({
    input: process.stdin, // Lê o terminal
    output: process.stdout // Armazena resposta terminal
});


// Funções para imprimir no console--------------
function InformarNome () {
    rl.question('Pergunta 1/4: Qual seu nome? ', (nome) => {
        dadosPessoais.nome = nome;
        informarAltura();
});
}

function informarAltura () {
    rl.question('Pergunta 2/4: Qual sua altura? ', (altura) => {
        dadosPessoais.altura = altura;
        informarPeso();
});
}

function informarPeso () {
    rl.question('Pergunta 3/4: Qual seu peso? ', (peso) => {
        dadosPessoais.peso = peso;
        informarIdade();
});
}

function informarIdade () {
    rl.question('Pergunta 4/4: Qual sua idade? ', (idade) => {
        dadosPessoais.idade = idade;
        calcularIMC();
});
}

function calcularIMC () {
    const IMC = dadosPessoais.peso / Math.pow(dadosPessoais.altura, 2).toFixed();
    console.log(`\nBeleza, já estamos com suas informações ${dadosPessoais.nome}, aguarde alguns segundos enquanto nosso sistema computa seus dados...`);

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
        rl.close();
    }, 5000);    
}
// Fim do sistema ------------


// Interface / Chamando funções

console.log('Bem-vindo (a) ao nosso sistema IMC!')
InformarNome();
