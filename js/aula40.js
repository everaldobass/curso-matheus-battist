/**
 * Aula 40 - Adicionar elemento - appendChild e insertBefore
- Podemos inserir um elemento dentro de outro, por exemplo um paragráfo em uma div;
- Isso é considerado como acrescentar filhos em JS;
 */
 console.log("\n----Adicionar elemento - appendChild e insertBefore.----\n");

// Criar Elemento
let adc1 = document.createElement("div");
adc1.classList = "div-criada";

// Selecionando a div container
let container = document.querySelector("#container");

// inserindo a Div criada dentro do Div Container
container.appendChild(adc1);

// insertBefore - Dentro da div container
let adc2 = document.createElement("div");
adc2.classList = "div-before";

let adc3 = document.querySelector("#container .div-criada");
container.insertBefore(adc2, adc3);