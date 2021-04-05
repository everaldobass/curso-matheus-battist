/**
 * Aula 14 - Else if e Else
- Caso a instrução de if negativa, podemos adicionar else;
- Que será a outra condicional a ser executada;
- Podemos então criar uma bifurcação no código;
- Já o else if tem a possibilidade de fazer outra verificação e adicionar mais um bloco de códig;

 */
console.log("\n-------Else if e Else------");
let nome = "Everaldo";

if(nome == "Pedro"){
   console.log("O nome dele é: " + nome);

}else if(nome == "Everaldo"){
    console.log("Seu nome é: " + nome);

}else{
    console.log("Ele tem outro nome: " + nome);
}

// else if
let idade = 17;

if (idade >= 20){
    console.log("Maior idade: " + idade + " Anos")

}else if(idade <= 18){
    console.log("Menor idade: " + idade + " Anos")
}