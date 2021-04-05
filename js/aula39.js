/**
 * Aula 39 - Removendo elementos - removeChild
- Remover elementos também é muito fácil com o JavaScript;
- Temos como remover o elemento diretamente e também um elemento filho;
 */
 console.log("\n----Removendo elementos - removeChild.----\n");

// Removendo elementos filho
 let container = document.querySelector("#container");

 // Selecionando o container
 let paragrafo = document.querySelector("#container p");
// Removendo o paragráfo
container.removeChild(paragrafo);

// Remover um elemento direto ex: Subtitulo
let subtitle = document.querySelector("#subtitle");
subtitle.remove();