const rl = require("readline-sync");
//let valor1 = rl.questionInt("¿Introduzca un numero? ");
//let valor2 = rl.questionInt("¿Introduzca otro numero? ");
let variable = true;
while (variable) {
  let valor1 = rl.questionInt("¿Introduzca un numero? ");
  let valor2 = rl.questionInt("¿Introduzca otro numero? ");
  let valor3 = rl.question(
    "¿Que tipo de operacion vas a realizar, sumar, restar, multiplicar, dividir y salir? "
  );

  if (valor3 == "sumar") {
    console.log("El resultado de la suma es " + (valor1 + valor2));
    variable = true;
  }
  if (valor3 == "restar") {
    console.log("El resultado de la resta es " + (valor1 - valor2));
    variable = true;
  }
  if (valor3 == "multiplicar") {
    console.log("El resultado de la multiplicación es " + valor1 * valor2);
    variable = true;
  }
  if (valor3 == "dividir") {
    console.log("El resultado de la división es " + valor1 / valor2);
    variable = true;
  }
  if (valor3 == "salir") {
    console.log("Hasta luego, gracias por utilizar Calculadora pro");
    variable = false;
  }
}
