/**
 * Aula 47 - clearTimeout e clearInterval
- Podemos por um fim em setTimeout e setInterval por meio destes dois métodos;
- Então após determinada condição os timers não serão mais executados;

 */
console.log("-------clearTimeout e clearInterval---------");
// cleartimeout na pática
let x = 0;

let myTime = setTimeout(function(){
    console.log(" 0 x é 0");
}, 3500);

x = 5;

// parando o setTimeout
if(x > 0){
    clearTimeout(myTime);
    console.log(" O x passou de 0 ");
}


// clearSetInterval
let myInterval = setInterval(function(){

    console.log("Imprimir o interval ");

}, 500);

//Clear o meu myInterval
setTimeout(function(){
    console.log("Não precisa mais se repetir");
    clearInterval(myInterval);

}, 1500);


