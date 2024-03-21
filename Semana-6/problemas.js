//function
//revertir cadena

/*
crea una funcion que tome una cadena como entrada y devuelva una nueva cadena con los caracteres en orden inverso

ejemplo
Hola = aloh
mundo = odnum
*/

function invertirCadena(texto){
    //primero validamos si el parametro texto es una cadena
    
    if (typeof texto !== "string") {
     
      return "Unicamente aceptamos textos"
    }
  
  }
  "hola".split("").reverse().join("")
  
  invertirCadena(100) // 001
  invertirCadena(true)
  invertirCadena("hola mundo")

  👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓

  /* contar lac cantidad de vocales en una cadena:

crea una fucnion que tome una cadena /string) como entrada y vuelva la cantidad de vocales que contien, puede considerar tanto las vocales en mayusculas como en misnusculas. 

hola==> 2
celuular ==>4
telefono ==> 4
*/


function contarVocales(texto) {
  if (typeof texto!=="string" ) return "no es un texto"
    
  const vocales = "aeiou".split("")
    const TextoEnMinuscula = text.ToLowerCase()
    let contador = 0
    
    for (let i =0; i < textoEnMinuscula.lenth; i++) {
     if (vocales.includes (TextoEnMinuscula[i])){
       contador++
     }
    }
    //template string
    return `la cantidad de vocales son:  ${contador}`
  }
  
  contarVocales("telefono")

  👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓

  /* comprobar si un numero es primo

escribe una funcin que tome un numero (number) como entrada y devuelva true si es primo y false si no lo es. un numero primo es aquel que solo es divisible por 1 y por si mismo.
*/


function comprobarSiEsNumeroPrimo(numero){
  if (typeof numero !== "number"){
    return "solo se aceptan numeros"
  }
    
  if (numero===1) return false
    let contador = 0
    
    for (let i = 0 ;i < numero; i++){
      if (numero % 1 == 0){
        contador++
      }
    }
    if (contador === 2){
      return true
    }
    return true
  }
  
  comprobarSiEsNumeroPrimo("hola")
  comprobarSiEsNumeroPrimo(true)
  comprobarSiEsNumeroPrimo(1)
  comprobarSiEsNumeroPrimo(20)
  comprobarSiEsNumeroPrimo(3)

  👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓




/*suam de elementos de una array:
escriba una funcion que tome un array de numeros como entrada y devuelva la suma de todos sus elementos.
[1,10,5]=16
[20,43,3]=66
*/

function SumarArray (numero) {
    //primero validmos si es un array
    if (typeof numeros !== "object || numero.length < 1"){
      return "solo acptmoas arrays con informacion"
    }
    for (let i= 0;1< numeros.length; i++)
      if (typeof numeros[i] !== "number"){
      return "solo aceptamos arrays de numeros"
      }
    return suma
  }
  
  SumarArray ([1,"10,3"])
  SumarArray ([1,10,3])
  SumarArrayce (2)

  👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓


  /*calcular el promedio de un array:
escribe una funcion que tome un array de numeros como entrada y devuleva el promedio de esos numero
[1,10,1]=4
[1,10,1,2,1]=3
*/

function SumarArray (numero) {
  //primero validmos si es un array
  if (typeof numeros !== "object || numero.length < 1"){
    return "solo acptmoas arrays con informacion"
  }
  for (let i= 0;1< numeros.length; i++)
    if (typeof numeros[i] !== "number"){
    return "solo aceptamos arrays de numeros"
    }
  return suma
}

SumarArray ([1,"10,3"])
SumarArray ([1,10,3])
SumarArray (2)