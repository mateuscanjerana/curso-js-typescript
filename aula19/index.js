//Valores primitivos e valores por referência
//Valores primitivos (string, number, boolean, null, undefined, bigint, symbol): São valores imutáveis, ou seja, não podem ser alterados. Quando atribuídos a uma variável, o valor é copiado para essa variável. Se a variável for atribuída a outra variável, o valor é copiado novamente.

let a = 'A';
let b = a; //Copia o valor de a para b
console.log(a, b);
a = 'B'; //Altera o valor de a, mas b continua com o valor original
console.log(a, b);


//Valores por referência (object, arrays, function): São valores mutáveis, ou seja, podem ser alterados. Quando atribuídos a uma variável, o valor é armazenado em um local de memória e a variável armazena uma referência para esse local. Se a variável for atribuída a outra variável, ambas as variáveis apontam para o mesmo local de memória.

let c = [1,2,3];
let d = c; //Copia a referência de c para d, aponta para o mesmo local de memória
console.log(c, d);
c.push(4); //Altera o valor do array, e como d aponta para o mesmo local de memória, d também é alterado
console.log(c, d);
d.pop();
console.log(c, d);

const x = { //Objetos também são alterados por referência 
    nome: 'Luiz',
    sobrenome: 'Souza'
};
console.log(x);
const z = x;
x.nome = 'João';
console.log(z);