// Operadores aritiméticos: 

const num = 2;
const num1 = 10;
const num2 = 5; //Number
const num3 = '15'; //String

console.log('Operadores aritméticos:');
// + = Adição / concatenação
console.log(num1 + num2 + num3); //O resultado é 1515, pois o operador "+"" tem a função de concatenação quando um dos operandos é string. O JavaScript converte os números para string e concatena os valores.

// - = subtração
console.log(num1 - num2); // O resultado é 5, pois o operador "-" tem a função de subtração.

// * = multiplicação
console.log(num1 * num2); // O resultado é 50, pois o operador "*" tem a função de multiplicação.

// / = divisão
console.log(num1 / num2); // O resultado é 2, pois o operador "/" tem a função de divisão.

// % = resto da divisão
console.log(num1 % num2); // O resultado é 0, pois o operador "%" tem a função de calcular o resto da divisão entre num1 e num2.

// ** = exponenciação
console.log(num1 ** num2); // O resultado é 100000, pois o operador "**" tem a função de calcular a potência de num1 elevado a num2 (10 elevado a 5).

console.log(num1 + num2 * num - num2 / num1 + (num1 - num2)); // O resultado é 24.5, pois o JavaScript segue a ordem de precedência dos operadores avaliada da seguinte forma: 
// num2 * num = 5 * 2 = 10 -> num1 + 10 = 10 + 10 = 20 -> num2 / num1 = 5 / 10 = 0.5 -> 20 - 0.5 = 19.5 -> num1 - num2 = 10 - 5 = 5 -> 19.5 + 5 = 24.5.

// Ordem de precedência dos operadores:
// 1. Parênteses () ; 2. Exponenciação ** ; 3. Multiplicação *, Divisão / e Resto da divisão % ; 4. Adição + e Subtração - 
// Se os operadores tiverem a mesma precedência, a avaliação é feita da esquerda para a direita.  

// Operadores de incremento e decremento:
console.log(' ');
console.log('Operadores de incremento e decremento:');
// ++ = incremento
let contador = 1; // Variável do tipo let, pois o valor será alterado posteriormente. Não pode ser do tipo const, pois o valor de contador será modificado com os operadores de incremento. O valor inicial de contador é 1.
contador ++; // O operador "++" é o operador de incremento, que tem a função de aumentar o valor da variável contador em 1 a cada vez que é utilizado. Neste caso, o valor inicial de contador é 1, e após as duas operações de incremento, o valor final de contador se torna 3 (1 + 1 + 1).
++contador; // O operador "++" pode ser utilizado tanto na forma pós-fixada (contador++) quanto na forma pré-fixada (++contador). A diferença entre as duas formas é a ordem de avaliação. Na forma pós-fixada, o valor da variável é incrementado após a avaliação da expressão, enquanto na forma pré-fixada, o valor da variável é incrementado antes da avaliação da expressão. Neste caso, como estamos apenas utilizando os operadores de incremento sem envolver outras expressões, o resultado final de contador será o mesmo (3) independentemente da forma utilizada.
console.log(contador);
// -- = decremento
contador --; // O operador "--" é o operador de decremento, que tem a função de diminuir o valor da variável contador em 1 a cada vez que é utilizado. Neste caso, após as duas operações de decremento, o valor final de contador se torna 1 (3 - 1 - 1).
console.log(contador);
console.log(' ');

// Operadores de atribuição:
console.log('Operadores de atribuição:');

let contador1 = 1; 
passo = 2;

 //Pode usar: "contador1 = contador1 + passo;" 
contador1 += passo;// Esta é uma forma de incrementar o valor de contador em 2, utilizando a operação de adição.
contador1 += passo; //O operador "+=" é um operador de atribuição que combina a operação de adição com a atribuição. Ele adiciona o valor do lado direito (passo) ao valor atual da variável contador1 e, em seguida, atribui o resultado de volta à variável contador1. Neste caso, o valor inicial de contador1 é 1, e após a operação de incremento, o valor final de contador1 se torna 3 (1 + 2).
console.log(contador1); 
contador1 **= passo;
console.log(contador1);
contador1 -= passo; 
console.log(contador1);
console.log(' ');

// NaN = Not a Number (Não é um número)
console.log('NaN - Not a Number (Não é um número):'); // NaN é um valor especial em JavaScript que representa um valor que não é um número válido. Ele é geralmente o resultado de operações matemáticas inválidas ou de conversões de tipos que não podem ser interpretadas como números.

const a = Number('10'); // A função Number é usada para converter uma string em um número. Neste caso, a string '10' é convertida para o número 10.
const b = parseInt ('5');// A função parseInt é usada para converter uma string em um número inteiro. Neste caso, a string '5' é convertida para o número inteiro 5. Se a string não puder ser convertida para um número, o resultado será NaN (Not a Number).
const c = parseFloat('6.2'); // A função parseFloat é usada para converter uma string em um número de ponto flutuante (decimal). Neste caso, a string '6.2' é convertida para o número de ponto flutuante 6.2. Se a string não puder ser convertida para um número, o resultado será NaN (Not a Number).
console.log(a + b - c);
console.log(typeof b);