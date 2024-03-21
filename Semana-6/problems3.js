//map y foreach
const number =[1., 2., 34, 53];

/*
number.map(function(item,index,array){

})
foreach (function (item,index,array))

*/

//filter y find

//filter  : retorno un array con la informacion filtrada
number.filter(function(number){

})


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
    },
  ];

  const filterBooks = books.filter(function (book){
    return book.pages > 330;
  });

  console.log(filterBooks);

  console.log(numbers.indexOf(34)); //existe en el array y su indice es 2 (fila 2)
  console.log(number.indexOf(1)); //no existe en el array