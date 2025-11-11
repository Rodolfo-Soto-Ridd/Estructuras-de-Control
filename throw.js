function validarEdad(edad) {
  if (typeof edad !== "number") {
    throw new TypeError("La edad debe ser un número");
  }

  if (edad < 0) {
    throw new RangeError("La edad no puede ser negativa");
  }

  if (edad > 150) {
    throw new RangeError("La edad parece ser inválida");
  }

  return edad;
}

// Uso con try/catch
try {
  validarEdad(-5);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error de tipo:", error.message);
  } else if (error instanceof RangeError) {
    console.log("Error de rango:", error.message);
  }
}