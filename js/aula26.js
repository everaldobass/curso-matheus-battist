/**
 * Aula 26 - let e const + escopo
- Utilizando let e cont podemos criar escopo até em instruções como if;
- Deixando o código mais confiave;
- Separando cada bloco em um escopo;
 * 
 */

 console.log("\n----Escopo ----\n");


 let x = 5;
 x = 12;

 console.log(x);

 if(true){
     let x = 20
     console.log(x);
 }

// Não conse alterar o valor
 const y = 30;
console.log(y);
