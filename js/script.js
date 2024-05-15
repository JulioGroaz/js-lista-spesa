const arraySpesa =[banane, cipolle,pasta,pesto,gallette,macinato];
const ulElement = document.querySelector('ul');

let contatore =0;
while (contatore == arraySpesa){
    const li = document.createElement('li');
    li.append =(arraySpesa[contatore]);
    contatore = contatore + 1;

}