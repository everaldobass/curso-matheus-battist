
/**
 * Aula 45 - Callback functions
- A função de callback é um recurso muito interessante e também amplamente utilizada em JS;
- Permite executar uma função depois de uma determinada ação;
- Conceito fundamental para entender a parte assincrona do JS;

 */
console.log("-------Callback functions---------");


function exibir(num){
   console.log("A operação é: " + num);
}


//Função com Callback
function soma(a,b, callback){
    let op = a + b;
    callback(op);

}
// exibe a função soma
soma(4,8, exibir);

// Função de multiplicação
function multiplicacao(x ,y, cb){
    let op = x * y;
    cb(op);
}
//Exibe a função de multiplicação
multiplicacao(2,5, exibir);