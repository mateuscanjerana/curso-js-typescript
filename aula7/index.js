//Não podemos criar constantes com palavras reservadas
//constantes precisam ter nomes significativos
//Não podemos começar o nome de uma constante com um número
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Constantes são case-sensitive
//Não podemos modificar o valor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST.

const nomeCompleto = "João da Silva";
console.log(nomeCompleto);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado); 

const resultadoDuplicado = resultado * 2;   
console.log(resultadoDuplicado);

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

//Sabendo o tipo da variavel
console.log(typeof primeiroNumero); //typeof mostra o tipo da variavel.