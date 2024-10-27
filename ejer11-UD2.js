const rl = require("readline-sync");
console.log("Bienvenido a nuestro cajero automatico ");
let variable1 = rl.question("¿Dime como te llamas? ");
// ponemos la cantidad de saldo del cliente
let saldo = 60;
let patata = true;
while (patata) {
  let accion = rl.question(
    "¿Que tipo de operacion vas a realizar " +
      variable1 +
      " ,extraer,ingresar, saldo o salir? "
  );
  if (accion == "saldo") {
    console.log("El saldo disponible es " + saldo + " €");
  }
  if (accion == "ingresar") {
    let ingreso = rl.questionInt("¿Que cantidad quieres ingresar? ");

    saldo = ingreso + saldo;
  }
  if (accion == "extraer") {
    let extraer = rl.questionInt("¿Que cantidad quieres extraer? ");

    saldo = saldo - extraer;
    if (saldo < 0) {
      console.log("Tienes un descubierto bancario" + saldo);
    }
  }
  if (accion == "salir") {
    console.log("Gracias por su visita, nos vemos pronto ");
    patata = false;
  }
}
