//Exercício: Nesse exercício, você deve criar três variáveis, cada uma com um valor diferente.

let varA = 'A'; //Deve ter o valor 'B'
let varB = 'B'; //Deve ter o valor 'C'
let varC = 'C'; //Deve ter o valor 'A'

let varAc = varA;
varA = varB;
varB = varC;
varC = varAc;

console.log(varA, varB, varC);