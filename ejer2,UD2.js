const rl = require("readline-sync");
let valor1 = rl.questionInt("¿Introduzca un numero?");
let valor2 = rl.questionInt("¿Introduzca otro numero distinto?");
if (valor1 > valor2) {
  console.log("El primer valor es mayor que el segundo valor");
} else {
  console.log("El segundo valor es mayor que el primer valor");
}
