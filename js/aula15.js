/**
 * Aula 15 - Comparação de valor e tipo de dado.
- Outro operadores de comparação (=== e !==);
- A função é comparar valor e tipo de dado;
 */
console.log("\n-------Operadores de comparação (=== e !==)------");
//let numero = 5; // Executa o tipo do numero
let numero = "5" //- Não executa a variavel o tipo é string 
// o tipo de dado === garante o valor exato!
if(numero === 5){
    console.log("O Valor é do tipo númerico: " + numero);
}
// O Valor é diferente tipo é diferente
if(numero !== 5 ){
    console.log("O Valor é do tipo String: " + numero);
}