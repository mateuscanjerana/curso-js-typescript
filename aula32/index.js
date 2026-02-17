// Atribuição via destruturação
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

// Uma maneira
const alfabeto = ['z', 'x', 'y'];
const ultimaLetra = alfabeto[0];
console.log(ultimaLetra);

//Outra maneira: Se feito com const, não é possivel fazer com let
//... rest operator (resto das variáveis)
const numeros = [100, 2000 , 300, 4000, 500, 6000, 70, 800 , 9];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);
const [primeiro, , terceiro, , quinto] = numeros; //pula o segundo elemento do array
console.log(primeiro, terceiro , quinto);

//maneira complexa
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros2[1][2]);
const [,[,, seis]] = numeros2; //pula elementos
console.log(seis);
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[1]);

