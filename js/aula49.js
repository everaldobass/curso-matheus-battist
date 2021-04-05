/**
 * Aula 49 - Eventos click e dblclick do DOM
- O click é ativado quando o usuário clica em um elemento em que atrelamos o evento;
- Após a ação podemos fazer as modificações e alterações no HTML/CSS que quisermos;
 */
console.log("---Eventos click e dblclick do DOM----");

let btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){

    console.log("Clicou");
    // o  this se torna o proprio elemento
    console.log(this);
    this.style.color = "red";
});


// Click duplo
let subtitle = document.querySelector("#subtitle");
subtitle.addEventListener("dblclick", function(){

    console.log("Click duplo!!!");
});
