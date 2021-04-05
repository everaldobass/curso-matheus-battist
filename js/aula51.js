
/**
 * Aula 51 - Eventos keydown e keyup
- O evento keydown e ativado quando uma tecla é precionada;
- Podemos também atrelar o evento keyup para quando uma tecla volta a posição normal;
 * 
 */
 console.log("---Eventos keydown e keyup----");

// Adicionando um evento, quando aperta a tecla enter do teclado
document.addEventListener("keydown", function(event){

    console.log(event.key);

    if(event.key === "Enter"){
        console.log("Apertou enter");
    }


});

// Adicionando um evento keyup
document.addEventListener("keyup", function(e){

    if(e.key === "Enter"){
        console.log("Liberou a tecla enter");
    }
});