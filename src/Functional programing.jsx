import fs from 'fs';
// fs es un modulo de node que me permite trabajar con el sistema de archivos 
//  me permite leer y escribir archivos 
 


var personas = [
    {nombre: 'Juan', edad: 20, genre: 'M'},
    {nombre: 'Pedro', edad: 30, genre: 'M'},
    {nombre: 'Ana', edad: 20,       genre: 'F'},
    {nombre: 'Luis', edad: 15 , genre: 'M'},
]



var jovenes = [];


for (let i=0; i < personas.length; i++){
    if(personas[i].edad === 20){
        jovenes.push(personas[i])
    }
}


var jovenss  = personas.filter(persona=> persona.edad === 20 && personas.edad === 15)
console.log(jovenss)

// filter me permite filtrar los elementos de un array que cumplan con una condicion dada y me devuelve un nuevo array 
//con los elementos que cumplan con la condicion dada   en este caso me devuelve un array con las personas que tengan 20 años
// y 15 años  *filter espera que la funcion de retrollamada me devuelva un valor booleano si es verdadero me lo agrega al array si es falso no lo agrega

var  nuevoArray=personas.map(x => x.nombre + "tiene " + x.edad + " años")
console.log(nuevoArray)

// map me permite recorrer un array y 
//me devuelve un nuevo array con los elementos que cumplan con la condicion dada en este caso me devuelve un array 
//con los nombres de las personas y su edad agregando tiene y años formando un nuevo array

var womens  = personas.find(persona=> persona.genre === 'F')
// find me permite encontrar el primer elemento que cumpla con la condicion dada y me devuelve un 
//nuevo array con el primer elemento que cumpla con la condicion dada
console.log(womens)


var TotalEdad  =personas.reduce(    (acumulator , persona) => acumulator + persona.edad, 0)

console.log(TotalEdad)

// reduce me permite reducir un array a un solo valor en este caso me devuelve la suma de las edades de las personas    
//reduce toma dos argumentos un acumulator un valor 
//inicial y persona que es elemento iterable el cero al final es el valor inicial de acumulator 
// cada vez que se itera  acumulator toma el valor sumado y luego lo lleva y le vuelve a sumar el otro valor    


var output = fs.readFileSync('data.txt', 'utf8')
.trim() // me permite eliminar los espacios en blanco al principio y al final de un string
.split( '\n' ) // me permite dividir un string en un array de subcadenas
.map(x => x.split('\t')) // aqui lo que hago es que me divide el array en subcadenas por medio de un tabulador
.reduce( (cliente, x) => { 
 cliente[x[0]] = cliente[x[0]] || []
 cliente[x[0]].push({nombre: x[1], precio: x[2], cantidad: x[3]

 })
 return cliente
}, {} )
// Recorre el array y acumula en un objeto 'cliente'. 'x' es el array que se recorre.
// Asigna 'cliente[x[0]] = cliente[x[0]] || []' para reutilizar el objeto 'cliente' o inicializarlo como un array vacío si no existe.
// Luego, con 'push', agrega las propiedades 'nombre', 'precio' y 'cantidad' del array 'x' recorrido y retorna el objeto 'cliente'.

console.log("outpout", JSON.stringify (output, null, 2)) // jsonstringify me genera un json a partir de un objeto mas facil de leer

function crearContador() {
    let contador = 0;
  
    return function() {
      contador++;
      console.log(contador);
    };
  }
  
  const contador1 = crearContador();
  contador1(); // 1
  contador1(); // 2
  
  const contador2 = crearContador();
  contador2(); // 1
  contador2(); // 2
/*
Los closures en JavaScript son una característica
 poderosa que permite a una función acceder a 
 variables de su entorno léxico, incluso después de que la función externa 
 haya terminado de ejecutarse. En otras 
palabras, un closure es una función que 
"recuerda" el entorno en el que fue creada.


Entorno Léxico: Cuando una función se crea,
 se guarda junto con su entorno léxico, es decir, las
  variables que estaban en su alcance en el momento de su creación.

Acceso a Variables Externas: Un closure permite que una función interna 
acceda a las variables de una función externa, incluso 
después de que la función externa haya terminado de ejecutarse.

*/

function multiplicar(a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      }
    };
  }
  
 const resultado = multiplicar(2)(3)(4); // 24


  /*
El currying en JavaScript es una técnica de 
programación funcional que consiste en transformar una 
función que toma múltiples argumentos en una serie de funciones
 que toman un solo argumento. Esta técnica permite la creación de 
 funciones más específicas y reutilizables.



Función Original: Una función que toma múltiples argumentos.

Función Curried: Una serie de funciones que toman un solo 
argumento y retornan otra función que toma el siguiente argumento
, y así sucesivamente, hasta que todos los argumentos hayan sido proporcionados.

  */


let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
   ];

    let makeTree = (categories, parent) => {
     let node = {};
     categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id));
     return node;   }

     console.log(   JSON.stringify(makeTree(categories, null), null, 2)   );

     //  llo que hacemos aqui es usar recursividad para ordenar el array categories 
     // y asi poder hacer un arbol de categorias  y subcategorias 
        // en este caso el array categories tiene un id y un parent
        // el id es el nombre de la categoria y el parent es la categoria padre
        // en este caso el parent null es la categoria raiz
        // y las demas categorias son subcategorias de la categoria raiz    
        // lo que hacemos es que filtramos las categorias que tengan como parent la categoria raiz y luego 
        // iteramos sobre esas categorias y creamos un objeto con el id de la categoria y llamamos a la funcion makeTree
        // y le pasamos como argumento el array categories y el id de la categoria y asi sucesivamente hasta que no haya mas subcategorias
        