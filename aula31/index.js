//Mais diferenças entre var e let
const verdadeira = true;

//let tem escopo de bloco {... bloco}
//var só tem escopo de função

let nome = 'Luiz'; //criando no escopo global
var nome2 = 'Luiz'; 
console.log(nome, nome2);

if (verdadeira) {
    let nome = 'Otávio'; //criando uma nova variável, escopo de bloco
    var nome2 = 'Ricardo'; //recriando, sobrescreve a variável global
    console.log(nome, nome2);

    if (verdadeira){ // expressão bloco aninhado
        let nome = 'Outra coisa' //criando uma nova variável, escopo de bloco
        var nome2 = 'Mais uma coisa'; //recriando, sobrescreve a variável global
        console.log(nome, nome2);
    }
}
console.log(nome, nome2); //Vai imprimir Luiz e Mais uma coisa, pois a variável nome2 foi sobrescrita dentro do bloco if, já a variável nome não foi afetada, pois tem escopo de bloco.

function falaOi() {
    if (verdadeira) {
        var sobrenome = 'Otávio';
    }
    console.log(sobrenome);//var tem escopo de função, então a variável sobrenome é acessível dentro da função falaOi, mesmo que tenha sido declarada dentro do bloco if. Já com let, isso não aconteceria, pois let tem escopo de bloco, e a variável sobrenome não seria acessível fora do bloco if.
}   
falaOi(); 

console.log(variavel); //undefined
var variavel = 'Estou no topo'; //var é içada (hoisting), ou seja, a declaração da variável é movida para o topo do escopo, mas a atribuição permanece no lugar onde foi escrita. Por isso, quando tentamos acessar a variável antes de sua declaração, ela existe, mas seu valor é undefined. Já com let, isso não acontece, pois let não é iniciada, e tentar acessar a variável antes de sua declaração resultaria em um erro de referência.