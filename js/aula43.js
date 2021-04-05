/**
 * Aula 43 - Alterando CSS pelo DOM com JS
- É muito comum alterar CSS com JavaScript também;
- As Regras de CSS ficam de forma inline;
- Substituindo a maioria das outras regras criadas;
 */
console.log("-------Alterando CSS pelo DOM com JS---------");

// Selecionar o elemento
let title = document.querySelector("#title");

// Adicionando o estilo
title.style.color = "red";

//Background-color
title.style.backgroundColor = "yellow";


//Selecionar elemento
let subtitle = document.querySelector("#subtitle");

// Adicionar vários estilos
subtitle.style.cssText = "color: blue; background-color: pink; font-size: 30px";




