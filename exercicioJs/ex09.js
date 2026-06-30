// Desafio - Loja

// Crie:

// produto
// preco
// quantidade

// Calcule:

// total = preco * quantidade

// Se o total for maior que R$500:

// Desconto de 15%

// Caso contrário:

// Sem desconto

// Mostre o total.

const produto = "notebook";
const preço = "600";
const quantidade = "1";

let total = preço * quantidade;

if(total > 500){
    total = total * 0.85;
    console.log("produto é %d:" produto);
    console.log("Total com 15% de desconto %d": total);
} else{
    console.log("produto é %d:" produto);
    console.log("Total (sem desconto)%d": total);
}
