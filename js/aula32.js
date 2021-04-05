/**
 * Aula 32 - Tudo é objeto
- Criando Objetos com Métodos
- Como você pode percever muitos tipos de dados tem métodos e propriedades;
- Podemos criar também os nossos objetos com propriedades é métodos para auxiliar nossos programas;
 * 
 */

 console.log("\n----Criando Objetos com Métodos----\n");

 let pessoa ={
     nome: "Everaldo",
     idade: 30,

     //Criando método Falar
     falar: function(){
         console.log("Olá tudo bém? ");
     },

     // Criando método de soma
     soma: function(a, b){

        return a + b;

     },
 }
// chamando o objeto pessoa
 console.log(pessoa.nome);
 // chamando o método falar
 pessoa.falar();
 // Chamando metodo soma
 let soma = pessoa.soma(2,2);
 console.log(soma);


