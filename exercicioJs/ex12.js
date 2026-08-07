// Exercício 12 - if / else if / else

// Crie as variáveis de um sistema escolar:

// presenca (em porcentagem, ex: 80)
// mediaFinal (ex: 7.5)

// Verifique a situação do aluno:

// Se a presença for menor que 75% -> Reprovado por falta
// Se a presença for maior ou igual a 75% E a média for >= 6 -> Aprovado
// Se a presença for maior ou igual a 75% E a média for < 6 -> Recuperação

// Mostre a situação final do aluno no console.

const presenca = 60;
const mediaFinal = 7.5;

if(presenca < 75) {
    console.log("Reprovado por falta");
} else if(presenca >= 75 && mediaFinal >= 6) {
    console.log("Aprovado");
} else {
    console.log("Recuperação")
}