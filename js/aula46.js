/**
 * Aula 46 - setTimeout e setInterval
- Podemos com estas funções criar ações no software que executam depois de um tempo ou de tempos em tempos;
- Um dos argumentos destas funções é um callback function;
 */
console.log("-------setTimeout e setInterval---------");

// setTimeout - Conta 2 mil segundos 
setTimeout(function(){

    console.log("Antes do setTimeout");
    
},2000);
//Cria a execução com um delay
console.log("Depois do setTimeout");

// SetInterval
setInterval(function(){
    console.log("Testando setInterval");
}, 1000);