//Objeto Math é um objeto nativo do JavaScript que possui propriedades e métodos para realizar operações matemáticas. Ele é utilizado para realizar cálculos, arredondamentos, gerar números aleatórios, entre outras funcionalidades relacionadas à matemática.
let num1 = 9.54565;
let num2 = Math.floor(num1);// arredonda para baixo
console.log(num2);
num2 = Math.ceil(num1);// arredonda para cima
console.log(num2);
num2 = Math.round(num1);// arredonda para o mais próximo
console.log(num2);
console.log(Math.max(1, 2, 3, 4, -10, -50, 1550, 8, 9, 10));// retorna o maior número
console.log(Math.min(1, 2, 3, 4, -10, -50, 1550, 8, 9, 10));// retorna o menor número
console.log(Math.random());// retorna um número aleatório entre 0 e 1
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);// retorna um número aleatório entre 5 e 10
console.log(aleatorio);

console.log(Math.PI);// retorna o valor de PI
console.log(Math.pow(2,10));// retorna o valor de 2 elevado a 10
console.log(2 ** 10);// retorna o valor de 2 elevado a 10

let num3 = 16;
console.log(num3 ** (1/2));// retorna a raiz quadrada de 16
console.log(num3 ** 0.5);// retorna a raiz quadrada de 16
console.log(Math.sqrt(num3));// retorna a raiz quadrada de 16

console.log(100 / 0);// retorna Infinity
