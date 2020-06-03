// Que es la mutable e inmutable en javascript

/**
 * QUUE ES MUTABLE E INMUTABLE EN JS
 * La palabra mutable se refiere a "Suceptible de cambiar" o simplemente poner un codigo "cambiable".
 * Cuadno hablamos de codigo mutable, nos referimos especificamente a estructura de datos mutable como objetos, arrays, etc
 * y existe la posibilidad de cambiar su forma o estructura. Un ejemplo para ilustrar
 * 
 * Digamos que tenemos una coleccion de comida con sus categorias.
 * Notamos un error y necesitamso actualizar el objeto en el orden correcto.
 * hagamos esto primero con mutacion.
 */

let food = {
  apple: 'fruit',
  banana: 'fruit',
  tomato: 'vegetable'
}

// aqui actualizamos tomate el cual deberia de ser una fruta
food.tomato = 'fruit'

console.log(food)


/**
 * Ahora hagamos algo similar pero con inmutabilidad
 */

let newFood = {
  apple: "fruit",
  banana: "fruit",
  tomato: "vegetable",
};

// aqui creamos un nuevo objeto con las propiedades actualizadas
const { tomato, ...rest } = newFood

const updatedFood = {
  tomate: 'fruit',
  ...rest
}

console.log(updatedFood);


/**
 * ¿Puedes notar la diferencia entre los dos? Podemos ver aquí que,
 * en lugar de cambiar la propiedad de un objeto,
 * decidimos crear un objeto completamente nuevo que incorpore los cambios que queríamos hacer.
 * 
 * OK, lo vemos pero cual es el punto, como esto nos puede beneficiar
 * 
 * Usando codigo inmutable puede beneficiarte de esta manera:
 * 
 * Previsibilidad
 * Seguimiento de cambios / historial.
 * Evitar un choque de referencias.
 * Evitar un comportamiento inesperado en general.
 */