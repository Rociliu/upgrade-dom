"use strict";
//2.1 Inserta dinamicamente en un html un div vacio con javascript
const newDiv = document.createElement("div");
document.body.append(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv2 = document.createElement("div");
document.body.append(newDiv2);
const texto = document.createTextNode("p");
newDiv2.append(texto);


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const newDiv3 = document.createElement("div");
document.body.append(newDiv3);
for(let i=1; i<7;i++){
    const texto2 = document.createTextNode("p");
    newDiv3.append(texto2);
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const texto3 = document.createTextNode("Soy dinámico");
document.body.append(texto3);


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here');
h2.innerText = "Wubba Lubba dub dub";


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement("ul");
const listItem = document.createElement("li");
listItem.innerText = apps[0];
lista.append(listItem);
for (let i=1; i<apps.length; i++){
    const listItem = document.createElement("li");
    listItem.innerText = apps[i];
    lista.append(listItem);
    
}
document.body.append(lista);


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const parrafos = document.querySelectorAll('.fn-remove-me');
for(let i=0; i<parrafos.length; i++){
    parrafos[i].remove();
};


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const divs = document.querySelectorAll('div');
const secondDiv = divs[1];

const phrase = document.createElement('p');
phrase.innerText = "Voy en medio";
document.body.insertBefore(phrase, secondDiv);




//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divInside = document.querySelectorAll('.fn-insert-here');

for (let i=0; i<divInside.length; i++){
    const phrase2 = document.createElement('p');
    phrase2.innerText = "Voy dentro";
    divInside[i].appendChild(phrase2);
   }
   
