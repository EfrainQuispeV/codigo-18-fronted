//descripcion del test
//el string que rescibe discribe hace referencia a un titulo principal
describe('template spec', () => {
beforeEach(()=>{
  cy.visit("http://localhost:5173/")
});

  //el string que recibe it hace referencia a la prueba que hacemos dentor de el
  it("Vamos a probar que el texto Efrain Quispe exista", () => {
    // lo que dentro del it son el paso a paso> 

    //paso 1: para entrara (cy) = cypress
    //visit ptermite navegar a algun lado
    cy.get("h1").contains("Efrain Quispe");
  });

  it("vamos a probar si se puede escribir en el input",()=>{
    cy.get(".tasks").should("have.length",0);
    cy.get("input[type=text]").type("tarea 2");
    cy.get("button").contains("Crear Tarea").click();
    cy.get(".tasks").should("have.length",1);
    cy.get("input[type=text]").type("tarea 3");
    cy.get("button").contains("Crear Tarea").click();
  });
});

