
//NOMBRE: Osvaldo Santander.

'use strict'

class Refrigerador {
    constructor() {
      this.comida = ['yogurt','pescado', 'pollo']; // agrego los elementos en el array
    }
  
    //METODO agregar
    agregarComida(item) {
      this.comida.push(item); 
    }


     //METODO eliminar
    eliminarComida(item) {      
      
      let indice = this.comida.indexOf(item);    
      if (indice != -1) {
        this.comida.splice(indice, 1);
      }
    }

    mostrarComida() {
    
      let cadena = this.comida.join(", ");   // Creamos una cadena con los items del array comida, separados por comas
      alert("El refrigerador tiene: " + cadena);
    }
}

//Variable para aplicar los metodos

let miRefrigerador = new Refrigerador();

miRefrigerador.agregarComida("lechuga");

miRefrigerador.eliminarComida("pescado");

miRefrigerador.mostrarComida(); 

 
  