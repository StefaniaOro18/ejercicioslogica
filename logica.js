'use strict'

 
/* 
1. Solicitar al usuario que ingrese 2 matrices cada una con 6 dimensiones 
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Mostrar cuantos elementos tiene el array

*/

function mostrarArray(elementos,textoCustom = ""){
	document.write("<h1>Contenido del array" +textoCustom+"</h1>");
	document.write("<ul>");
	elementos.forEach((elemento, index) => {
		document.write("<li>"+elemento+"</li>");
			});
    document.write("</ul>");
  
}

//pedir 6 números
var numero1 = [];
var numero2 = [];


for(var i =0; i <= 5; i++){
   // numeros1[i] = parseInt(prompt("Introduce un número"));
   numero1.push(parseInt(prompt("Introduce los numeros de la primera matriz")));


}

var numeros2 = [];

for(var i =0; i <= 5; i++){
   // numero2[i] = parseInt(prompt("Introduce un número"));
   numero2.push(parseInt(prompt("Introduce los numeros de la segunda matriz")));
}


//Mostrar en el cuerpo de la pagina
mostrarArray(numero1);
mostrarArray(numero2);



// mostrar array por consola
console.log(numero1,numero2);


// cuantos elementos tiene el primer array 
document.write("<h1>El array número tiene:"+numero1.length+"elementos");

// cuantos elementos tiene el segundo array 
document.write("<h1>El array número 2 tiene:"+numero1.length+"elementos");


function porConsola(numero1,numero2){
       
       console.log("Suma: " + (numero1+numero2));
       
}

function porPantalla(numero1,numero2){
       document.write("Suma: " + (numero1+numero2+"<br/>"));
      
}




