// Desafio - Sistema de Reabilitação

// Crie as variáveis de um paciente em um jogo fisioterápico:

// acertos (quantos movimentos corretos ele fez)
// totalMovimentos (total de movimentos exigidos)

// Calcule a porcentagem de acertos:
// porcentagem = (acertos / totalMovimentos) * 100

// O fisioterapeuta ajustará o input do sistema baseado no desempenho:

// Se a porcentagem for maior ou igual a 80%:
// Sugerir: "Aumentar nível de dificuldade"

// Se for entre 50% e 79%:
// Sugerir: "Manter nível atual"

// Se for menor que 50%:
// Sugerir: "Reduzir nível de dificuldade"

// Mostre a porcentagem de acertos e a sugestão para o fisioterapeuta no console.

const acertos = 16;
const totalMovimentos = 20;

const porcentagem = (acertos / totalMovimentos) * 100;

console.log("Porcentagem de acertos: " + porcentagem);

if(porcentagem >= 80){
    console.log("Aumentar nível de dificuldade");
} else if(porcentagem >= 50 && porcentagem < 80){
    console.log("Manter nível atual");
} else{
    console.log("Reduzir níveç de dificuldade");
}