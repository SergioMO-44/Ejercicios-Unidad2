const rl = require("readline-sync");
let variable = rl.questionInt("¿Introduzca un numero?");
if (variable > 40) {
  console.log("El resultado de la variable es mayor a 4o");
} else if (variable == 40) {
  console.log("El resultado de la variable es igual a 40");
} else {
  console.log("El resultado de la variable es menor a 40");
}
