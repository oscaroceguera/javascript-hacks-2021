/**
 * Veamos algunos ejemplos. En JS hay dos tipos de asignacion de variables
 * Asignacion por valor y asignacion por referencia
 * 
 * Como asignar por valor en JS
 */

var tomatoes = 3;
var apples = tomatoes; // asignacion por valor
tomatoes++;
console.log(apples) // 3
console.log(tomatoes)  // 4

// asignacion por referencia en JS
var fruits = ['apple', 'banana', 'kiwi']
var exoticFruits = fruits; // asignacion por referencia
exoticFruits.push('mango')
console.log(fruits)        //['apple', 'banana', 'kiwi', 'mango']
console.log(exoticFruits)  //['apple', 'banana', 'kiwi', 'mango']

/**
 * Lo que paso aqui es que en js arrays y objetos trabajan por referencia, esto significa
 * que l asignacion es una direccion en memoria que mantienen el valor, creando asi otra variable
 * como lo hicimos con "var exoticFruits = fruits"; solo mantendra la misma direccion que "fruits"
 * por lo tanto retornara el mismo valor.
 * 
 * Tipos de datos primitivos (String, Number, Boolean, undefined, null, Symbol) trabajan con asignacion por valor
 * por lo que almacenaran directamente el valor asignado en lugar de una referencia (direccion en la memoria)
 * 
 * POR QUE ESTO ES IMPORTANTE PARA EL CONCEPTO DE CODIGO INMUTABLE.
 * 
 * Cuando trabajamos con código asíncrono, agrega una capa de conceptos
 * a tener en cuenta ya que no hay una secuencia específica de órdenes
 * en las que se producirán las instrucciones. Esto puede conducir a un
 * choque de referencia, por ejemplo, en el que el elemento variable de
 * un bucle for (element in array) {} `puede retener una referencia del
 * bucle anterior. Agregue a eso una capa de complejidad mediante la
 *  implementación de un bucle anidado para con código asincrónico.
 * Muchas cosas a tener en cuenta al depurar el código, ¿no?

