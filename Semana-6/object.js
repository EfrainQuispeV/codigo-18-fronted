

console.log(person.name)
console.log(person["name"])
//so no existe la propiedad retorna undefnied
console.log(person.hasPhone)
 
// array (arreglos)
const alumnos =["pepe","maria",Juan]
const anyData =[1,true,{id:i}],"holacumbol("foo")"
console.log(typeof anyData)


// excercise

//en java scrip, cuando tenemos tipo de entidad, 

const person = {
    id: 1,
    name: "pepe",
    lastname: "perez",
    hasCar:true,
    car:{
     brand:"Ator Martin",
     color:{
      variant:"neutro",
      hex: "#0000"
    }
   }
  }
  
  
  //object
  Object.keys(person).length
  Object.keys(person.car)
  Object.keys(person.car.color)
  Object.values(person).length
  Object.entries(person).length



  👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓

  //crear array de objecto:

const books=[
    {
      id:1,
      title: "1984",
      country:"UK",
      pages:238,
      isbn:"97840451526935"
    },
    {
      id:2,
      title:"hamlet",
      country: "Denmark",
      pages: 342,
      isbn: "9780743477123"
    }
  ]

  //queremos agregar la propiedad imagen a books

const newBooks = books.map(function (book){
    return {
      id: book.id,
      title: book.title,
      country: book.country,
      pagues: book.pagues,
      isbn: book.isbn
    }
  })
  
  console.log(newBooks)

👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓

  //array que me retorne de  un munero de:

const numbers=[100,20,23,54,57,12]

function forOfExample(){
for (let number of numbers){
  console.log(number)
   }
  }
function forInExample(){
for (let number in numbers){
  console.log(number)
   }
  }
//quiero uan funcion que me retorne el cuadro de cada numero del arreglo umbers
function powSquareNumbers(){
  const newNumbers=[]
  
  for(let number of numbers){
    const result = number * number
    newNumbers.push(result)
  }
  return newNumbers
}
powSquareNumbers()



//map lo que hace es iterar y retornar un arreglo

function powSquareNumbersMap(){
 const newNumber = numbers.map(function (number){
    return number * number
  })
 return newNumber
}
powSquareNumbersMap()

👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓


//tengo un array de precios y quiero otro arreglo pero de los precios + el igv 18% (0.18)

const prices = [100.3, 2000.45, 125,305]

const pricesIGV = prices.map(function (price) {
  return Number((prices * 1.18).toFixed(2)) 
})

console.log(pricesIGV)


//map -> []
//firEach -> nada

👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓👨‍🎓

function countVowels (names){
    const vowels = "aeiuo".split("");
    const result = [];
    
    names.forEach(function (name){
      //paso 1. convertirlo name a minusculo
      const nameInLowerCase = name.toLowerCase();
      let count = 0
      nameInLowerCase.split("").forEach(function (letter){
        if (vowels.includes(letter)){
          count++;
        }
            });
        result.push ({
          originalName: name,
          vowels: count,
        });
        });
      return result;
    }
   
  
  countVowels ( ["Pepe", "Juan", "Maria", "Pedro"] );
  