const rl = require("readline-sync");
//let variable = rl.questionInt("¿Introduzca un numero?");
let variable1 = true;
while (variable1) {
  let variable = rl.questionInt("¿Introduzca un numero?");
  if (variable > 20) {
    console.log("Por fin el numero es mayor a 20, conseguido");
    variable1 = false;
  } else if (variable <= 20) {
    console.log("Vuelva a intentarlo");
    variable1 = true;
  }
}
