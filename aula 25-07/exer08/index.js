let numerosPares = '';


function exercercio08 (number) {
  return number % 2 === 0;

}

for (let i = 1; i <= 20; i++) {
  if (exercercio08(i)) {
    numerosPares += i + ' ';
  }
}

console.log('Números pares de 1 a 20: ');
console.log(numerosPares);
