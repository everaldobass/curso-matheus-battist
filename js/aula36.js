/**
 * Aula 36 - Outras forma de acessar o DOM - querySelector e querySelectorAll
- Com a evolução da linguagen foram criados dois seletores que acabam com toda a complexidade desta açao;
- querySelector e querySeletorAll;
- Com estes podemos acessar os elementos baseados em regras de CSS;
 */


console.log("\n----Outras forma de acessar o DOM.----\n");

let itensClass = document.getElementsByClassName('item');
console.log(itensClass);

// querySelectorAll  - Busca vários itens

let itensQuery = document.querySelectorAll('#lista1 li');
console.log(itensQuery);

let itensQuery2 = document.querySelectorAll('#lista2 li');
console.log(itensQuery2);

// querySelector - Busca apenas 1 item
let lista1 = document.querySelector('#lista1');
console.log(lista1);

