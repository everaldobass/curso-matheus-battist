/**
 * Aula 17 - Operador Lógico OR (||)
- O operador lógico || é conhecido também como OR;
- Ele retorna true caso uma das operações retorne verdadeiro;
- O OR retorna false apenas se as duas expressões são falsas;
 */
console.log("\n-------Operador Lógico OR (||)------");

let nome = "Ane";
let idade = 13;

if(nome == "João" || idade > 14){
    console.log("\nPode entrar na aula. \n");
}else{
    console.log("\nNão pode entrar. \n");
}

// Testando a condição com && / ||

// Verdadeiro     e   Verdadeiro
if(nome == "Ane" && (30 > 20 || 10 == 10)){

    console.log("Entrou");

}else{
    console.log("Não entrou");
}

