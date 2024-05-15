const arraySpesa =['banane', 'cipolle','pasta','pesto','gallette','macinato'];
const ulElement = document.querySelector('ul');

let contatore =0;
while (contatore < arraySpesa.length){
    const li = document.createElement('li');
    li.textContent =arraySpesa[contatore];
    contatore = contatore + 1;

    ulElement.appendChild(li);
}