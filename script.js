function tabuada (numero) {
     console.log(`${numero} x 1 = ${numero * 1}`);
    console.log(`${numero} x 2 = ${numero * 2}`);
    console.log(`${numero} x 3 = ${numero * 3}`);
    console.log(`${numero} x 4 = ${numero * 4}`);
    console.log(`${numero} x 5 = ${numero * 5}`);
    console.log(`${numero} x 6 = ${numero * 6}`);
    console.log(`${numero} x 7 = ${numero * 7}`);
    console.log(`${numero} x 8 = ${numero * 8}`);
    console.log(`${numero} x 9 = ${numero * 9}`);
    console.log(`${numero} x 10 = ${numero * 10}`);
}

function somar (numero1, numero2) {
    const somaDosNumeros = numero1 + numero2;
    console.log (`A soma é ${somaDosNumeros}`);
}

const valor1 = Number(prompt("Digite o Primeiro Numero."));
const valor2 = Number(prompt("Digite o Segundo Numero."));

somar(valor1, valor2);


function somar(a, b) {
    console.log(`A soma é: ${a + b}`);
}

function ehPar(numero) {
    console.log(numero % 2 === 0);
}

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

const numero1 = 20;
const numero2 = 4;

const resultadoSoma = soma(numero1, numero2);
const resultadoSubtracao = subtracao(numero1, numero2);
const resultadoMultiplicacao = multiplicacao(numero1, numero2);
const resultadoDivisao = divisao(numero1, numero2);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração: ${resultadoSubtracao}`);
console.log(`Multiplicação: ${resultadoMultiplicacao}`);
console.log(`Divisão: ${resultadoDivisao}`);

console.log('\nTabuada do 5:');
tabuada(5);

console.log('\nTeste soma:');
somar(10, 5);

console.log('\nTeste se é par:');
ehPar(10);  // true
ehPar(7);   // false

