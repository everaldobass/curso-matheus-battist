/**
 * Aula 42 - Alterando atributos
- Podemos alterar os atributos via JS e DOM
- Por Exemplo: Alterar o atributo alt de uma imagem;
- Ou Até um src de uma imagem;
- Todos os atributos podem ser alterados via JS;
 */

console.log("\n----Adicionando atributo (setAttribute).----\n");

// Selecionando o Titulo da pagina HTML
let title = document.querySelector("#title");
// Adicionando a classe teste atributo ao titulo do html
title.setAttribute("class", "teste-atributo");
console.log(title);


// Desabilitando um botão com JS
let btn = document.querySelector("#btn");
// Setando o atributo de desabilitar
btn.setAttribute("disabled", "desabled");

// Criando um subtitulo 
let subtitle = document.querySelector(".subtitle");
subtitle.setAttribute("id", "titulo-2");


//Removendo atributo 
var lista = document.querySelector("#lista");
lista.removeAttribute("id");






