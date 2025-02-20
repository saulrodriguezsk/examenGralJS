function distancia(str1, str2) {
  let diferencia = 0; // Contador para diferencias entre carácteres
  let longitudMaxima = Math.max(str1.length, str2.length); // Determina la longitud mayor de las dos cadenas

  // Comparación carácter por carácter
  for (let i = 0; i < longitudMaxima; i++) {
    if (str1[i] !== str2[i]) {
      // Compara si los carácteres en la misma posición son diferentes
      diferencia++; // Incrementa el contador de diferencias
    }
  }

  return diferencia; // Devuelve la cantidad de diferencias encontradas
}

// CÓDIGO DE PRUEBA
console.log(distancia("hola", "hola")); // 0 (las cadenas son idénticas)
console.log(distancia("sol", "tol")); // 1 (diferencia en la primera letra)
console.log(distancia("carro", "correr")); // 3 (diferencias en varias posiciones)
console.log(distancia("gato", "gat")); // 1 (diferencia de longitud también cuenta)
console.log(distancia("abc", "abcdef")); // 3 (diferencia por longitud)
