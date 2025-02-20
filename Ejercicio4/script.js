// Agrega el método personalizado "myOwnReduce" al prototipo de Array
Array.prototype.myOwnReduce = function (callback, initialValue) {
  // Compara si el array está vacío y si no se proporciona un valor inicial, se lanza un error
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let acumulator; // Variable para almacenar el resultado acumulado
  let startIndex; // Índice de inicio para el recorrido del array

  //  Compara si se proporcionó un valor inicial
  if (initialValue !== undefined) {
    acumulator = initialValue; // Si existe, se usa como acumulador inicial
    startIndex = 0; // Inicio desde el primer elemento
  } else {
    acumulator = this[0]; // Si no hay valor inicial, se toma el primer elemento del array
    startIndex = 1; // Inicio desde el segundo elemento
  }

  // Iteración sobre el array desde el índice determinado
  for (let i = startIndex; i < this.length; i++) {
    acumulator = callback(acumulator, this[i], i, this); // Llama al callback con el acumulador y el elemento actual
  }

  return acumulator; // Devuelve el resultado final del acumulador
};

// CÓDIGO DE PRUEBA
const array = [1, 2, 3, 4, 5];

// Función de reducción para sumar los valores
const callback = (acumulator, current) => acumulator + current;

// Prueba con reducción sin valor inicial
console.log(array.myOwnReduce(callback)); // 15

// Prueba con un valor inicial 10
console.log(array.myOwnReduce(callback, 10)); // 25
