// try/catch básico
try {
  let resultado = dividir(10, 0);
  console.log(resultado);
} catch (error) {
  console.log("Error:", error.message);
}

// Función que puede lanzar error
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

// try/catch/finally
function procesarArchivo() {
  try {
    // Intentar leer archivo
    let contenido = leerArchivo("datos.txt");
    console.log("Archivo leído:", contenido);

    // Procesar contenido
    let resultado = JSON.parse(contenido);
    return resultado;

  } catch (error) {
    console.log("Error al procesar archivo:", error.message);
    // Podríamos intentar con un archivo alternativo

  } finally {
    // Siempre se ejecuta
    console.log("Limpieza completada");
  }
}