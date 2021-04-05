/**
 * Aula 44 -  Propriedades do document
- O Objeto document não tem somente métodos;
- Podemos retirar várias informações importantes das suas propriedades também;
 */

console.log("-------Propriedades do document---------");
//Selecionando o body / head
console.log(document.body);
console.log(document.head);

//Selecionando links
console.log(document.links);

// selecionar a url
console.log(document.URL);

//Selecionar o title 
console.log(document.title);

//alterar o titilo
document.title = "Aprendendo JavaScript";
console.log(document.title);

