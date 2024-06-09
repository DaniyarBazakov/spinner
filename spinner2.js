const array = ['|', '/', '-', '\\', '|'];

const time = 200; 

array.forEach((char, i) => {
  setTimeout(() => {
    if (i === array.length - 1) {
      process.stdout.write(`\r${char}   \n`);
    } else {
      process.stdout.write(`\r${char}   `);
    }
  }, i * time);
});