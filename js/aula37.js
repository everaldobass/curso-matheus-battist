/**
 * 
 * 37 - Alterando o conteúdo do elemento - textConten e innerHTML
- Podemos alterar o texto de qualquer elemento de forma fácil com JavaScript;
- Posteriormente podemos atrelar estção acção com algum evento;
 * 
 */

 console.log("\n----Alterando o conteúdo do elemento - textConten e innerHTML.----\n");

// Selecionando elemento
 let title = document.querySelector('#title');

 // innerHTML - alterando o texto do titulo
title.innerHTML = "Alterando o testo do Título com o JavaScript";

 // textContent -> mais o utilizado, recomendado
 let subtitle = document.querySelector(".subtitle");
 console.log(subtitle);
 subtitle.textContent = "Alterando com o textContent"

 //





