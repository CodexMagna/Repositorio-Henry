// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var myAccess = array [0];
  return myAccess;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var myPopData = array.pop();
  return myPopData;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var arrayLength = array.length
  return arrayLength;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i = 0; i < array.length; i++){
    array[i] += 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var joinPhrase = palabras.join(" ");
  return joinPhrase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var checker = array.includes(elemento);
  if (checker === true) {
    return true;
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sum = numeros.reduce(function(a, b) { return a + b; }, 0);
  return sum;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var total = 0;
for(var i = 0; i < resultadosTest.length; i++) {
    total += resultadosTest[i];
}
var avg = total / resultadosTest.length;
return avg;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var biggest = 0;

  for (i = 0; i <= numeros.length; i++) {
      if (numeros[i] > biggest) {
          var biggest = numeros[i];
      }
}
return biggest;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicator = 1;
  if (arguments.length === 0) {
    return 0;
  }
  if (arguments.length === 1) {
    return 1;
  }
  for (i = 0; i < arguments.length; i++) {
    multiplicator = multiplicator * arguments[i];

  }
  return multiplicator;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var biggestThan = 0;

  for (i = 0; i <= arreglo.length; i++) {
      if (arreglo[i] > 18) {
          var biggestThan = ++biggestThan;
      }
  }
  return biggestThan;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  var arraySemana = [2, 3, 4, 5, 6];
  var finDeSemana = [1, 7];
  for (i = 0; i <= arraySemana.length; i++) {
    if (numeroDeDia === arraySemana[i]) {
      return "Es dia Laboral";
   }
  }
  for (i = 0; i <= finDeSemana.length; i++) {
    if (numeroDeDia === finDeSemana[i]) {
      return "Es fin de semana";
    }
   }
  }


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var stringyThingy = JSON.stringify(n);

  if (stringyThingy.startsWith(9)) {
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var allSame = new Set(arreglo).size
  if (allSame === 1) {
    return true;
  }
  return false;
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arrayMeses = [];

  for (i = 0; i <= array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      arrayMeses.push(array[i]);

   }
  }

  if (arrayMeses.indexOf("Enero") === -1 || arrayMeses.indexOf("Marzo") === -1  || arrayMeses.indexOf("Noviembre") === -1 ) {
   return "No se encontraron los meses pedidos";
  }
  return arrayMeses;

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];

  for (i = 0; i <= array.length; i++) {
    if (array[i] > 100) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var elArray = [];
  var elMensaje = "";
    for (i = 1; i <= 10; i++)  {
      numero = numero + 2;
      elArray.push(numero);
      if (i === numero) {
        elMensaje += "Se interrumpió la ejecución";
      }
      if (i === numero) {
        break;
      }
  }
  if (elMensaje.includes("Se interrumpió la ejecución") === true) {
    return elMensaje;
  }
    return elArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var elArrayPerez = [];
  for (i = 1; i <= 10; i++)  {
    if (i === 5) {
      continue;
    }
    numero = numero + 2;
    elArrayPerez.push(numero);


  }
  return elArrayPerez;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
