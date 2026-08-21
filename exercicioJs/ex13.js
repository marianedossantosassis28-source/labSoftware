// Exercício 13 - Operações e Condicionais

// O sistema exige um teste de habilidade. 

// Crie as variáveis:

// valorDado (um número de 1 a 20)
// modificador (ex: 3)
// dificuldade (ex: 15)

// Calcule o resultado total (valorDado + modificador).

// Verifique:
// Se o resultado total for maior ou igual à dificuldade -> Sucesso!
// Caso contrário -> Falha.

// Imprima o resultado da ação no console.

const valorDado = 10;
const modificador = 3;
const dificuldade = 15;

const resultadoTotal = valorDado + modificador;

if(resultadoTotal >= dificuldade){
    console.log("sucesso");
} else {
    console.log("falha");
}