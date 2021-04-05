/**
 * Métodos de array - Parte 2
- Podemos também resgatar um conjunto de elementos com os métodos;
- Identificar o indice de um elemento especifico e muito mais;
 */

console.log("\n----Métodos de array Parte 2----\n");

// Splice - Adicionando elemento no meio de um array;
let adicionar = [1,2,3,4,5];
adicionar.splice(2,0,999);
console.log(adicionar);

// Splice - Remove um elemento especifico;
adicionar.splice(2, 1);
console.log(adicionar);

// indexOf - Encontra o indice de um elemento;
console.log(adicionar.indexOf(4));

// Join - Tranformar o array em String;
frase = ["Eu","sou","Programador", "de", "JavaScript"];
console.log(frase.join(","));

// Inverse - Inverte a Frase de um Array;
console.log(frase.reverse());
