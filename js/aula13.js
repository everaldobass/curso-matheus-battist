/**
 * Aula 13 - Operadores de comparação
- São comumente utilizados para verificação nas estruturas de condição;
- Temos os seguintes operadores: ==, !=, >, <, >=, <=;
- A partir de uma expressão de comparação podemos obter um true ou false;
 */

console.log("\n-------Operadores de comparação------");
// Operador de atribuição =
let idade = 16;
let possuicarro = 1;
// Maior ou Igual
if(idade >= 18){
   console.log("Pode tirar a habilitação");
}
//Menor ou igual
if(idade <= 17){
    console.log("Não pode tirar habilitação");
}
//
if(possuicarro){
    console.log(" Usuario tem carro");
}
// AOperador de Igualdade
let nome = "Everaldo"
if(nome == "Everaldo"){
    console.log("Seu nome é Everaldo!");
}

// Operador de diferênça
let sobrenome = "Nascimento";
if(nome != "Nascimento"){
    console.log("Seu nome não é Nascimento");
}

