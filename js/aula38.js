/**
 * Aula 38 - Criando elementos com DOM - createElement
- Outra possibilidade do JS e o DOM é criar elementos;
- O texto de um elemento é considerado um nó na árvore do DOM;
- Ou seja, temos que criar o texto do elemento também;
 */

console.log("\n----Criando elementos com DOM - createElement.----\n");

// Criando um paragráfo
let novoParagrafo = document.createElement("p");
// Criando um texto para o paragráfo
let texto = document.createTextNode("Este é o texto do novo paragráfo!");
novoParagrafo.appendChild(texto);
//console.log(novoParagrafo);

// inserindo o paragráfo no HTML
let body = document.querySelector("body");
//console.log(body);
body.appendChild(novoParagrafo);


// Inserir o texto dentro do container
let container = document.getElementById("container");
let elem = document.createElement("span");

elem.appendChild(document.createTextNode("texto do span dentro do container"));
container.appendChild(elem);


