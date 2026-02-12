//Mais sobre Numbers
let num1 = 10;
let num2 = 2.5;
let num3 = 255.345965;
let num4 = 55

console.log(num1.toString() + num2); //num1 foi convertido para string e concatenado com num2
console.log(typeof num1);
num1 = num1.toString(); //num1 agora é uma string
console.log(typeof num1);
console.log(num3.toString(2)); //num3 agora é uma string representando o número em binário
console.log(num3.toFixed(2)); //num3 agora é uma string representando o número com 2 casas decimais
console.log(Number.isInteger(num4)); //retorna true se num4 for um número inteiro, caso contrário retorna false
let temp = num4 * 'Ola'; //NaN - Not a Number, resultado de uma operação matemática inválida
console.log(Number.isNaN(temp)); //retorna true se temp for NaN, caso contrário retorna false

//IEEE 754 - padrão de representação de números em ponto flutuante, utilizado pela maioria das linguagens de programação, incluindo JavaScript. Ele define como os números são armazenados e manipulados na memória do computador, permitindo a representação de uma ampla gama de valores, incluindo números muito grandes e muito pequenos, bem como números decimais. No entanto, devido à forma como os números são representados, podem ocorrer imprecisões em cálculos envolvendo números decimais, o que é importante ter em mente ao trabalhar com números em JavaScript.
let float1 = 0.7;
let float2 = 0.1;
float1 += float2; //0.8
float1 += float2; //0.9
float1 += float2; //1.0 - resultado esperado, mas devido à imprecisão do IEEE 754, o resultado real é 0.9999999999999999
console.log(float1);

float1 = Number(float1.toFixed(2)); //float1 agora é 1.00, corrigindo a imprecisão
console.log(float1);
console.log(Number.isInteger(float1)); //retorna false, pois float1 é um número decimal, não um inteiro
//Outra forma de lidar com a imprecisão
let float3 = 0.9;
let float4 = 0.1;
float3 = ((float3 * 100) + (float4 * 100)) / 100; //float3 agora é 1.0, corrigindo a imprecisão multiplicando os números por 100 antes de somar e dividindo o resultado por 100 depois
console.log(float3);
console.log(Number.isInteger(float3));   