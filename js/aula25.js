/**
 * Aula 25 - Escopo
- No JavaScript podemos ter vários escopos;
- O Global, que é iniciado em toda a aplicação;
- E os locais, que podem existir em várias instruções como as funções;
 * 
 */


console.log("\n----Escopo ----\n");

// Variaveis global pode ser acessada de qualquer local

var x = 1;
var y = 3;

console.log(x,y);

// Variavel local da funcção

function teste(){
    //Escopo local
    var z = 0;
    console.log(z);
}

teste();

console.log(z);