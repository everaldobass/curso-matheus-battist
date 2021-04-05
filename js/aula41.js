
/**
 * Aula 41 - Trocando elementos
- Podemos também trocar um elemento no DOM;
- Ou Seja Substituir uma tag por outra e de modo bem fácil;
 * 
 */
 console.log("\n----Trocando elementos (replaceChild).----\n");

 //Criando o Elemento H3
let el = document.createElement("h3");
// Adicionando texto ao elemento
el.classList = "testando-classe";

// Criando um texto 
let texto = document.createTextNode("Esse é um Texto");

// Adicionando o texto com appendchild
el.appendChild(texto);
console.log(el);

// Seleciona o elemento para trocar
let title = document.querySelector("#title");
console.log(title);

// Selecionar o pai do el
let pai = title.parentNode;

// trocar os elementos
pai.replaceChild(el, title);
