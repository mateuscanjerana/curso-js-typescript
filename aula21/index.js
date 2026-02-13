//Operadores de Comparação: 
// > maior que
// < menor que
// >= maior ou igual a
// <= menor ou igual a
// == igualdade (valor)
// === igualdade estrita (valor e tipo)
// != diferente (valor)
// !== diferente estrito (valor e tipo)
const num1 = 10;
const num2 = 11;
const comp1 = num1 > num2; // false, pois 10 não é maior que 11
const comp2 = num1 >= num2; // false, pois 10 não é maior ou igual a 11
const comp3 = num1 < num2; // true, pois 10 é menor que 11
const comp4 = num1 <= num2; // true, pois 10 é menor ou igual a 11
console.log(comp1, comp2, comp3, comp4);

const a = 5; // Number
const b = '5'; // String
const conta1 = a == b; // true, pois compara apenas o valor, ignorando o tipo
const conta2 = a === b; // false, pois compara valor e tipo
const conta3 = a != b; // false, pois compara apenas o valor, ignorando o tipo
const conta4 = a !== b; // true, pois compara valor e tipo, e eles são diferentes
console.log(conta1, conta2, conta3, conta4);
