// for básico
for (let i = 0; i < 5; i++) {
  console.log(`Iteración ${i}`);
}

// for con arrays
let frutas = ["manzana", "banana", "naranja"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// while - verifica condición antes de ejecutar
let contador = 0;
while (contador < 3) {
  console.log(`Contador: ${contador}`);
  contador++;
}

// do-while - ejecuta al menos una vez
let numero;
do {
  numero = Math.floor(Math.random() * 10);
  console.log(`Número generado: ${numero}`);
} while (numero !== 5);

// Ideal para arrays y strings
let colores = ["rojo", "verde", "azul"];

for (let color of colores) {
  console.log(color);
}

// Para strings
let palabra = "JavaScript";
for (let letra of palabra) {
  console.log(letra);
}

// Para objetos
let persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
};

for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

// ⚠️ Cuidado: también itera propiedades heredadas
// Mejor usar Object.keys() para arrays
let array = ["a", "b", "c"];
for (let indice in array) {
  console.log(`Índice ${indice}: ${array[indice]}`);
}