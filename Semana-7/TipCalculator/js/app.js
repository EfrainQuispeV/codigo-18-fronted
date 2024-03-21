/*
console.log(document.querySelector("#contailer-bill")); //si es ID se usa #
console.log(document.querySelector("#.container-input")); // si es elemento se usa .
console.log(document.querySelector("main"));
*/

const containerBill = document.querySelector("#contailer-bill");
const inputBill = document.querySelector("#input-bill");

//el evento mas usado es el click
containerBill.onclick =function(){

    inputBill.focus(); //focus permite escribir en espacio
};

inputBill.onkeyup = function (event){
   if (isNaN(event.targe0))
}
