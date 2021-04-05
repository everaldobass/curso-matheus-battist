
/**
 * Aula 50 - Eventos mouseover e mouseout
- O mouseover é ativado quando o ponteiro do mouse passa em cima do elemento que criamos o evento;
- Temos também o evento mouseout que é quando o ponteiro sai do elemento;
 * 
 */
 console.log("---Eventos mouseover e mouseout----");

// Selecionando o titulo
 let title = document.querySelector("#title");

//Atribuiondo o evento mouseover - passa pelo elemento
 title.addEventListener("mouseover", function(){
     this.style.backgroundColor = "yellow";
 });

// Evento mouseout -  quando sai do elemento
title.addEventListener("mouseout", function(){

    this.style.backgroundColor = "pink";
});
