//function
//calcular el area de un circulo
//pi*r2

//formas de crear una function
function calcularAreaDeCirculo(radio) {
    const area = Math.PI * Math.pow(radio, 2);
    return Number(area.toFixed(2));
  }