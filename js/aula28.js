/**
 * Aula 28 - Métodos de String
- O Objeto String também possui métodos muito uteis;
- Que vão nos auxiliar a manusear textos nos nossos softwares;
 * 
 */

console.log("\n----Métodos de String ----\n");

// lenght
let nome = "Everaldo";
//Consegue contar a quantidade de letras da palavra
console.log(nome.length);

// indexOf
console.log(nome[5]);

// encontrar uma determinada palavra em um texto
let frase = "Curso de JavaScript 2021";
console.log(frase.indexOf("JavaScript"));

// slice
let palavra = frase.slice(9,19 );
console.log(palavra);

let novafrase = frase.replace("JavaScript", "Completo");
console.log(novafrase);
