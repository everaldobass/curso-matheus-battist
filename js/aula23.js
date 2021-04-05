
/**
 * Aula 23 - Funções
- Funções são blocos de códigos reutilizáveis;
- Ou seja, evitamos a repetição da lógica de um programa em diversas partes do código;
- A função precisa ser invocada para ser executada;
 */

console.log("\n----Funções sem paramentros----\n");

//Declarando uma função
function primeiraFuncao(){

    console.log("Hello word");
}

//Chamando uma função
primeiraFuncao();


//Função com 
console.log("\n----Funções com paramentros----\n");

function comParamentros(nome, sobrenome){

    console.log("Seu nome: " + nome);
    console.log("Seu sobrenome: " + sobrenome);
}

comParamentros("Everaldo", "sobrenome");


//Função com return
function soma(a, b){
    let soma  = a + b;
    return soma;
}

let somar = soma(5, 2);
console.log(somar);


