//variables

//mutable = el valor o tipo puede cambiar

// var =  (reomendacion nunca usar)
//   -Es la forma aantigual de declarar variable
//   -scope es mucho mayor
//   -ocupa mas espacio en memoria

var nombre = "linder"
var nombre = 10
 console.log("usando var", nombre);

// let = 
//     -sirve para lo mismo pero mas moderno para declarar variable
//     -Scope es en base al ambito donde se crea
//     -tiene una mejor optimizacion en memoria

let edad = 18


// /veriicando la variable edad exista y le reasigna un nuevo valor y un nuevo tipo
edad = "linder"
    
  //cuando creamos una variable sin preijo js lo asume com si se usara vas
direccion ="Av. siempre viva"


//inmutable = el valor o tipo no puede cambiar

const pi = Math.PI
const fechaNacimiento ="1991-01-01"
const DNI ="888"
const tipoDeSangre
console.log(pi)

👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓

//tipos de datos
/* 

string
number
bool
undefined
object
null
symbol

*/

//listas (arrays) /fechas/

//atring
let apellido = "hassinger"
console.log(typeof apellido)

//number
let altura = 1.78
console.log(typeof altura)

//boolean
let esMayorDeEdad = true // false
console.log(typeof esMayorDeEdad)

//undefined   (sino no es asignado un calor es undefined)
let numeroDeCelular 
console.log(typeof numeroDeCelular)

//null
let variable = null
console.log (typeof variable)

👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓

//object

const alumnos = ["pepe", "Maria", "Juan"]
const persona = {
  nombre: "juan",
  apellido: "Quispe"
}
console.log (typeof alumnos)
console.log (typeof persona)

const n1 = 10
const n2 = 10
console.log (n1===n2)

const n3 = Symbol(10)
const n4 = Symbol(10)
console.log(n4 === n3)

const n5 = BigInt (999999999999999999999999999999)
const n6 = 999999999999999999999999999999
console.log(typeof n5, n5)
console.log(typeof n6, n6)

console.log(n5===n6)
