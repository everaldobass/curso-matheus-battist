/**
 * Aula 35 - Acessando o DOM
- Acessar o DOM caracteriza-se por identificar um elemento do HTML através de métodos;
- Depois podemos manipulá-lo da forma que quisermos;
- Acessar o DOM é semelhante as regras de CSS;
- Podemos acessar por: tags, ids, classes;
 * 
 */

 console.log("\n----Acessando elementos através do DOM.----\n");


// Acessando vários elementos
 let titulo = document.getElementsById("h1")[0];
 console.log(titulo);

 // Acessando o ID
 let paragrafo = document.getElementById("paragrafo");
 console.log(paragrafo);


 let itensDalista = document.getElementsByTagName("item");