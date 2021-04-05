/**
 * Aula 33 - Utilizando a Instrução This.
- Fora de espocos locais o this sempre se refere ao objeto global Window;
- Em objetos o this vai se referir a instância e pode acessar suas propriedades;
 */

 console.log("\n----Utilizando a Instrução This----\n");

 console.log(this);

 let pessoa = {
     nome: "Everaldo",
     idade: 30,

     //método falar
     falar: function(){
         console.log("Sou Programador JavaScript");
     },

     //Método dizer nome
     dizerNome: function(){

        console.log("Meu nome é: " + this.nome);

     },


     // Alterar o valor
     aniversario: function(){

        this.idade += 1;

     },
 };

 // Acessando o atributo do objeto pessoa;
 console.log(pessoa.nome);
 console.log(pessoa.idade);
 pessoa.falar();

 // chmando a função nome:

 pessoa.dizerNome();
 pessoa.aniversario();
// Mostra a nova idade
 console.log(pessoa.idade);

