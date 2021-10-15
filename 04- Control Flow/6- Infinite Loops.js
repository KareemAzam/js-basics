// avoid make loop infinity
// it will crash your browser

let i = 0;
while (true) {
  console.log(i);
  // i++
}

for (let i = 0 /*i < 5*/; ; i++) {
  console.log(i);
}
