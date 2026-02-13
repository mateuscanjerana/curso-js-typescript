//Avaliação de curto-circuito (short-circuit)
/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY -> false, 0, '', "", ``, null, undefined, NaN -> Valor considerado falso em uma expressão booleana
TRUTHUY -> true, {}, [], 1, 3.23, '0', 'false', -1, Infinity, -Infinity -> Valor considerado verdadeiro em uma expressão booleana
*/
//&&
console.log('Luiz' && 0 && false); //Retorna o valor falsy
console.log('Luiz' && true && NaN); //Retorna o valor falsy

function falaOi() {
    return 'Oi';
}  
let vaiExecutar = 'Joao';
console.log(vaiExecutar && falaOi()); //Se a primeira expressão for verdadeira, ele irá retornar a segunda expressão, caso contrário, ele irá retornar o valor falsy da primeira expressão.

//||
console.log(0 || false || null || 'Luiz' || true); //Retorna o primeiro valor truthy
const corUsuario = null;
const corPadrao = corUsuario || 'red';
console.log(corPadrao);

const corUsuario2 = 'blue';
const corPadrao2 = corUsuario2 || 'red';
console.log(corPadrao2);

