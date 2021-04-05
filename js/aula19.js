/**
 * Aula 19 - Estrutura de repetição while
- Estas estruturas servem para repetir varias vezes uma operação;
- Ex.: Repetir uma determinada lógica em cada elemento do array;
- As estruturas mais comuns são: While e For;
 */


console.log("\n----Estrutura de repetição while----\n");

let cont = 1;

while (cont <= 5){
    console.log("\nValor da contagem é: \n" + cont)

    //Incremento
    cont ++;
    //cont = cont + 1;
}


// Teste em um arry
let frutas = ["\nUva","Maçã","Laranja","Banana", "Goiaba\n"];
let y = 0;

while(y <= 4){
    console.log(frutas[y] );

    y = y + 1;
}

// Verrificando cada letra do meu nome

let nome = "Everaldo";
let p = 0;

while(p <= 8){
   console.log(nome[p]);

   p++;
}


// Estudando Array

let carros = ["Ferrari", "BMW", "Audi", "Corola", "Honda Fiat"];
let car = 0;

while(car <= 6){
    console.log(carros[car]);
    //car++;
    car += 1;
}