/**
 * Aula 11 - Tipos de dados - Array
- Arrays são considerados como objetos em JavaScript, porém servem como listas;
- Podemos ter itens de qualquer tipo de dados também;
- Porém não por chave e valor, e sim por indece;


 */

console.log("\n--Tipos de dados - Array--");
//Colchetes array
let arr = ["Maça","Uva","Laranja","Goiaba"];
console.log(arr);
console.log(typeof arr);

console.log("\n--Acessando um Array--");
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);


console.log("\n--Inserindo um elemento Array--");
arr[4] = "Abacate";
console.log(arr);


console.log("\n--Sobrescrever um elemento Array--");
arr[0] = "Abacaxi";
console.log(arr);
console.log(typeof arr);


