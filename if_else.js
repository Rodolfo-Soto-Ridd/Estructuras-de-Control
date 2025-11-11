// Sintaxis: condición ? valor_si_true : valor_si_false
let esMayor = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(esMayor);

// Puede anidarse, pero no abuses
let categoria = calificacion >= 90 ? "A" :
                calificacion >= 80 ? "B" :
                calificacion >= 70 ? "C" : "D";