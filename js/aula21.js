/**
 * Aula 21 - for (estrutura de repetição - loop)
- O for tem uma sintaxe mais complexa, mas é optado pela maioria dos programadores;
- Apesar de parecer mais dificil, como ainstrução fica toda em uma linha proporciona maior controle;
 */

console.log("\n----for (estrutura de repetição - loop) ----\n");

let cont = 0;
for(cont = 0; cont <= 10; cont++ ){

    console.log("O Valor do contador: " + cont);
}

// Trabalhando com Array
let arr = [1,2,3,4,5];
let j = 0;

for(let j = 0; j < arr.length; j++){
    console.log("O Valor do Array: " + arr[j]);
}