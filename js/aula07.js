/**
 *Aula 7-Tipos de dados - String
- String é um tipo de dados para textos;
- As Strings pode ser utilizadas com aspas simples ou duplas;
- Números entre aspas pode ser considerado como uma string;
- É possivel também concatenar strings com o +;

 */
console.log("\n-------Concatenar Strings------\n");
let nome = "Everaldo";
let sobrenome = "Nascimento";

let nomecompleto = nome + " " + sobrenome;
console.log(nomecompleto);

console.log("\n-------Numeros entre aspas pode ser considerado como uma string------\n");
let numero = "12345";
console.log(typeof numero);

//document.write("Assim escreve no Browse");