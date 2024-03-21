//podemos acceder a una variable que esta en el localStorage

const user = localStorage.getItem("user");
// un elemento que no existe en localStorage, este retorna NULL
console.log(user);
//primero valir que el user exista
if (!user){
    location.href ="http://127.0.0.1:5501/index.html";
}

const fullname = document.querySelector("#name");
const email = document.querySelector("#email");

//para convertir un string a un objeto JSON.parse()
const userObj = JSON.parse(user);
fullname.textContent = `${userObj.name}${userObj.lastname}`;
email.textContent = userObj.email;

