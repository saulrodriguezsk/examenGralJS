function myMethod(str) {
  let resultado = []; // Usa un array para construir el resultado
  let contador = 1; //Inicializa el contador de repeticiones consecutivas de los carácteres

  //Recorre la cadena desde el segundo carácter hasta el final
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      //Compara si el caarácter actual es igual al anterior
      contador++; //Incrementa el contador de repeticiones
    } else {
      resultado.push(str[i - 1] + contador); // Añade al array en vez de concatenar directamente
      contador = 1; //Reinicia el contador de repeticiones
    }
  }

  resultado.push(str[str.length - 1] + contador); // Añade el último carácter y su cuenta

  return resultado.join(""); // Devuelve y convierte el array a una cadena
}

// CÓDIGO DE PRUEBA
console.log(myMethod("aabcccccaaa")); // «a2b1c5a3» Comprime la cadena
