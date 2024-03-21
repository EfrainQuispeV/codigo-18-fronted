/*
 * Reto #x
 * ¿ES UN ANAGRAMA?
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *


Ejemplos

Cara - arca -> anagrama true
lobo - bolo -> anagrama false
hola - hola -> false
 */

//solcuion 1

function sortWord(word){
    return word.toLowerCase().split("").sort().join("")
}


function isAnagram(word1,word2){
    if(word1 === word2) return false;
    
    return sortWord(word1)===sortWord(word2)
}
console.log(isAnagram("hola","hola"));
console.log(isAnagram("arca","arca"));