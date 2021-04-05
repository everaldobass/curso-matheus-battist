/**
 * Aula 30 - Métodos de array
- Os arrays também possuem métodos;
- Facilitanto a nossa vida para: adicionar e remover elementos, resgatar apenas uma parte do array e etc..
 */

console.log("\n----Métodos de array Parte 1----\n");

//Lenght - mostra a quantidade de elementos
let arr = [1,2,3,4,5];
console.log(arr.length);

// Push - Adicionando elemento a um array
arr.push(6);
arr.push("Everaldo");
console.log(arr);

//Pop - remove elemento de um do Final do array
arr.pop();
console.log(arr);

// Unshift, adiciona um elemento do inicio de um array;
arr.unshift(" inicio do arry");
console.log(arr);

//shift, remove um elemento do inicio de um array;
arr.shift();
console.log(arr);

//Acessar o ultimo elemento de um array;
let arru = [1,2,3,4];
console.log(arru[arru.length] -1);

// IsArry, verificar o tipo de dado;
console.log(Array.isArray(arru));
