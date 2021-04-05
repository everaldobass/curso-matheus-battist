/**
 * Aula 29 - Métodos de String - Parte 2 
- Os métodos de string também auxiliam na modificação;
- Podemos por exemplo deixar a fonte em caiza alta ou baixa com JS;
 */
console.log("\n----Métodos de String - Parte 2 ----\n");

// toLowerCase e toUpperCase
let frase = "Esta frase vamos manipular";
//Deixa a frase em caixa alta
let frasecaixaalta = frase.toUpperCase();
console.log(frasecaixaalta);

//Deixa a frase em caixa baixa
let frasecaixabaixa = frase.toLowerCase();
console.log(frasecaixabaixa);


//trim - tira o espaço
let nome = " Everaldo   ";
let nomeTrim = nome.trim();
console.log(nomeTrim);

//split - Transforma em uma array
let tags = "PHP, JAVA, NODE JS, PYTHON, HTML, CSS3";
console.log(tags.split(","));


//lastindexOf
let frasedois = " nesse texto vou pegar a ultima frase desse texto   ";
console.log(frasedois.lastIndexOf("texto"));
