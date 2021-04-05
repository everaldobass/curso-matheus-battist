/**
 * Aula 18 - Operador Lógico NOT (!)
- O Operador lógico ! é conhecido também como NOT;
- Este operador muda o valor que a expressão retornou;
- Se recebeu true vira false, se false vira true;
 * 
 */

console.log("\n-------Operador Lógico NOT (!)------\n");

if(!true){
    console.log(" Valor verdadeiro ");
}else{
    console.log("Valor Falso");
}

// 

let nome = "Everaldo";

if(!(nome == "Everaldo")){
    console.log("ok, seu nome é: " + nome);
}else{
    console.log("A variavel negou o seu nome, " + nome);
}