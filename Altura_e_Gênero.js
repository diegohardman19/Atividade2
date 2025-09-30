const pessoas = [
  { altura: 150, genero: 'F' },
  { altura: 172, genero: 'M' },
  { altura: 158, genero: 'F' },
  { altura: 180, genero: 'M' },
  { altura: 170, genero: 'F' },
  { altura: 175, genero: 'M' },
  { altura: 176, genero: 'F' },
  { altura: 168, genero: 'M' },
  { altura: 162, genero: 'F' },
  { altura: 177, genero: 'M' },
  { altura: 155, genero: 'F' },
  { altura: 182, genero: 'M' },
  { altura: 159, genero: 'F' },
  { altura: 174, genero: 'M' },
  { altura: 166, genero: 'F' }
];

let maiorAltura = pessoas[0].altura;
let menorAltura = pessoas[0].altura;
let somaAlturaM = 0;
let contadorM = 0;
let contadorF = 0;

pessoas.forEach(pessoa => {
  if (pessoa.altura > maiorAltura) maiorAltura = pessoa.altura;
  if (pessoa.altura < menorAltura) menorAltura = pessoa.altura;

  if (pessoa.genero === 'M') {
    somaAlturaM += pessoa.altura;
    contadorM++;
  } else if (pessoa.genero === 'F') {
    contadorF++;
  }
});

const mediaAlturaM = contadorM > 0 ? (somaAlturaM / contadorM).toFixed(2) : 0;

console.log(`Maior altura do grupo: ${maiorAltura} cm`);
console.log(`Menor altura do grupo: ${menorAltura} cm`);
console.log(`Média de altura dos homens: ${mediaAlturaM} cm`);
console.log(`Número de mulheres: ${contadorF}`);


