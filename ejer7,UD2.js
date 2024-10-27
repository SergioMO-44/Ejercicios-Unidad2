const rl = require("readline-sync");
let variable = rl.questionInt("¿Introduzca un numero?");
let x = 0;
for (let x = 0; x < variable + 1; ++x) {
  console.log(+x);
}
