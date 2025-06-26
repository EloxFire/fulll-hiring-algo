const readline = require('readline');

const fizzBuzz: (n:number) => void = (n: number): void => {
  if (n <= 0 || isNaN(n)) {
    console.error('Veuillez entrer un nombre entier positif.');
    return;
  }

  for (let i: number = 1; i <= n; i++) {
    let output: string = '';

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';

    console.log(output || i);
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Entrez un nombre pour FizzBuzz : ', (answer: string): void => {
  const number: number = parseInt(answer, 10);
  fizzBuzz(number);
  rl.close();
});