//push(): Agrega uno o más elementos al final del array
/*let numeros = [1,2,3];
numeros.push(4,5);
console.log(numeros);

//pop(): Elimina y devuelve el último elemento del array
let frutas = ["manzana","banana","uva"];
let ultimaF = frutas.pop();
console.log(ultimaF);
console.log(frutas);

//unshift(): Agrega uno o más elementos al inicio del array.
let colores = ["verde", "amarillo"];
colores.unshift("azul", "blanco");
console.log(colores)

//shift(): Elimina y devuelve el primer elemento del array
let paises = ["El salvador", "Peru","México"];
let Primerp = paises.shift();
console.log(Primerp);
console.log(paises);

//concat(): Combina dos o más arrays para crear un nuevo array.
let arra1 = [1,2];
let arra2 = [3,4];
let combinarArray = arra1.concat(arra2);
console.log(combinarArray);

/**slice(): Crea una copia superficial (shallow copy) del array con los elementos
seleccionados. */

/*let ArrayOriginal = [1,2,3,4,5];
let copiaArray = ArrayOriginal.slice(1,4);
console.log(copiaArray);

/**splice(): Cambia el contenido de un array eliminando, reemplazando o agregando
elementos. */
/*
let Frutas = ['banana','naranja','kiwi','pera','manzana'];
let removerfruta = Frutas.splice(2,1,'uva');
console.log(Frutas);
console.log(removerfruta);

/**forEach(): Ejecuta una función para cada elemento del array */

/*
let number = [1,2,3]
number.forEach(function(number){
    console.log(number * 2);
});


//Ejercicio2
const products = [
    {name: 'camisa', precio:20},
    {name: 'Jeans', precio:50},
    {name: 'zapatos', precio:80},
    {name: 'sombrero', precio:15}
]

let precioTotal = 0;

products.forEach(function(producto){
    precioTotal+= producto.precio;
});

console.log('Precio total a pagar. $', precioTotal);

/**map(): 
 * Crea un nuevo array aplicando una función a cada elemento del array original. */

/*
let numbers1 = [1,2,3];
let nuevoArreglo = numbers1.map(function(number){
    return number * 2
})

console.log(nuevoArreglo)

//ejercicio2
const Gcelcius = [0,15,30,5,10];
const Gfarenheith = Gcelcius.map(function(celcius){
    return (celcius * 9/5) + 32;
});
console.log('Grados celcius: ',Gcelcius)
console.log('Grados Farenheith: ', Gfarenheith)

/** filter(): Crea un nuevo array con todos los elementos que pasan una prueba (función
proporcionada). */

/*
const nums = [2,8,3,6,10,4,7];
const nums2 = nums.filter(function(number){
    return number > 5
});

console.log(nums2);

const personas = [
    {nombre: 'Isaac', edad: 22},
    {nombre: 'Angel', edad: 24},
    {nombre: 'Daniel', edad: 15},
    {nombre: 'Kevin', edad: 28},
    {nombre: 'Diego', edad: 17},
]

const adultos = personas.filter(function(person){
    return person.edad > 18
})

console.log(adultos)

/** reduce(): Aplica una función a un acumulador y a cada elemento de un arreglo (de
izquierda a derecha) para reducirlo a un solo valor*/
/*
let num = [1,2,3,4,5];
let sum = num.reduce(function(acumulador, valorActual){
    return acumulador + valorActual
},0)
console.log(sum)

/**every(): Comprueba si todos los elementos de un arreglo cumplen una condición dada
y devuelve true o false */

/*
let number2 = [1,2,3,4,5]
let mayorCero = number2.every(function(number2){
    return number2 > 0
});
console.log(mayorCero)

/**sort(): Ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo
arreglo). */

/*
let nombres = ['Isaac', 'Angel', 'Daniel', 'Kevin', 'Diego']
nombres.sort();
console.log(nombres)*/

//Ejercicios
 //1 
 // Crear un array vacío para almacenar nombres
let nombres = [];

// Agregar nombres al array usando push
nombres.push('Juan');      // Agrega 'Juan' al final del array
nombres.push('María');     // Agrega 'María' al final del array
nombres.push('Pedro');     // Agrega 'Pedro' al final del array

// El array ahora contiene: ['Juan', 'María', 'Pedro']
console.log('Nombres:', nombres);

// Agregar otro nombre al final del array
nombres.push('Laura');     // Agrega 'Laura' al final del array

// El array ahora contiene: ['Juan', 'María', 'Pedro', 'Laura']
console.log('Nombres actualizados:', nombres);

//Ejercicio 2
// Array de objetos (personas)
let personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
  ];
  
  // Utilizar el método map para crear un nuevo array con edades incrementadas
  let personasConEdadIncrementada = personas.map(function(persona) {
    return {
      nombre: persona.nombre,
      edad: persona.edad + 1
    };
  });
  
  // Mostrar el nuevo array con edades incrementadas
  console.log('Personas con edad incrementada:', personasConEdadIncrementada);

  // Ejercicio 3
  // Array de objetos (empleados) con salarios
let empleados = [
    { nombre: 'Juan', salario: 3000 },
    { nombre: 'María', salario: 2500 },
    { nombre: 'Pedro', salario: 3500 },
    { nombre: 'Isaac', salario: 5500 }
  ];
  
  // Utilizar el método reduce para calcular la suma de salarios
  let sumaSalarios = empleados.reduce(function(acumulador, empleado) {
    return acumulador + empleado.salario;
  }, 0);
  
  // Mostrar la suma total de salarios
  console.log('Suma de salarios:', sumaSalarios);
  
//Ejercicio 4
// Array de objetos (personas)
let personas2 = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
  ];
  
  // Utilizar el método forEach para mostrar información de cada persona
  personas.forEach(function(persona, indice) {
    console.log('Persona ' + (indice + 1) + ':');
    console.log('Nombre:', persona.nombre);
    console.log('Edad:', persona.edad);
    console.log('---------------------');
  });
  