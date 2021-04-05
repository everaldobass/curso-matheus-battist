/**
 * Aula 22 - Break e Continue
- Com breack podemos encerrar uma instrução;
Con o continue podemos pular uma instrução;
Utilizados na maioria das vezes em loops;
 */

console.log("\n----Break e Continue ----\n");

let cont = 0;

for(cont = 10; cont > 0; cont --){

    console.log("Valor: " + cont);

    if(cont === 5){

        break;
        
    }

}

console.log("\nDeu Breack: \n " + cont);


// Estrutura While
let x = 10;

while(x < 100){

    x += 10;

    if(x === 60){
        continue;
    }

    console.log("Valor do Continue: " + x);
}