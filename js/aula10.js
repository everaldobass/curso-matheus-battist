/**
 * Aula 10 - Tipos de dados - Object
- Funcionan como array associativo de outras linguagens;
- podemos criar propriedades com chave e valor;
- A ideia e gaurdar um conjunto de valores para utilizar posteriormente;
 */
console.log("\n---------Declarando um - Object-----------");
// Chaves e objeto
let obj = {
    nome: "Everaldo",
    idade: 30,
    profissao: "Programador",
    estudante: true,
};

console.log("\n------ Tipo de dado é Object-----------");
console.log(obj);
console.log(typeof obj);

console.log("\n------Acessando um Object-----------");
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);
console.log(obj.estudante);

