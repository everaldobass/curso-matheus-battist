/**
 * 
 */

let lista = ["Laranja", "Uva", "Maça", "Pera", "Abacaxi"];
let listaUl = document.createElement('ul');
let body = document.getElementsByTagName('body');


body[0].appendChild(listaUl);
let listNoBody = document.getElementsByTagName('ul');
console.log(listNoBody[0]);

for(let i = 0; i < lista.length; i++){

    let lifor = document.createElement('li');
    let textoli = document.createTextNode(lista[i]);

    lifor.appendChild(textoli);
    listNoBody[0].appendChild(lif);
}

