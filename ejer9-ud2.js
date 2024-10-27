for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i + j == 9) {
      process.stdout.write("0 ");
    } else {
      //process.stdout.write("-" + i + "." + j + " ");
      process.stdout.write("* ");
    }
  }
  console.log();
}
