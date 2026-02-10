//Variáveis: Variáveis são usadas para armazenar valores que podem ser usados e manipulados ao longo do código. Elas são como "caixas" onde podemos guardar informações. Em JavaScript, podemos declarar variáveis usando as palavras-chave "let", "const" ou "var".
let nome = "Henrique"; //let é usado para declarar variáveis que podem mudar de valor ao longo do tempo. O nome da variável é "nome" e o valor atribuído a ela é a string "Henrique".

console.log(nome, " nasceu em 1984");
console.log("Em 2000 " , nome , " conheceu Maria");
console.log(nome , " casou-se com Maria em 2012");
console.log("Maria teve um filho com " , nome , " em 2015");
console.log("O filho de " , nome , " se chama Eduardo"); //

let variavel; //Declarou uma variável sem inicializá-la
variavel = "qualquer valor"; //Atribuiu um valor à variável
console.log(variavel); 
variavel = "Outro valor"; //Alterou o valor da variável
console.log(variavel);

//Não podemos criar variáveis com palavras reservadas pelo JavaScript
//Exemplos de palavras reservadas: let, console, log, function, if, else, return 
//let let = "teste"; //Isso causará um erro
//Variáveis são case-sensitive (diferenciam maiúsculas de minúsculas)

//Variaveis precisam ter nomes significativos
let a;
console.log(a); //Não é uma boa prática usar nomes de variáveis com apenas uma letra

//Nomes de variáveis não podem começar com números
//let 1nome = "João"; //Isso causará um erro
let nome1 = "João"; //Isso é válido

//Nomes de variáveis não podem conter espaços ou traços
//let nome-completo = "Ana Silva"; //Isso causará um erro 

//Nomes de variáveis podem usar camelCase para separar palavras 
let nomeCompleto = "Ana Silva"; //Isso é válido e uma boa prática
//Case-sensitive significa que "nomeCompleto" e "nomecompleto" seriam variáveis diferentes 
let nomecompleto = "Pedro Souza"; //Isso é uma variável diferente devido ao case-sensitive
nomecompleto = "Carlos Pereira"; //Alterando o valor da variável nomecompleto
console.log(nomeCompleto, nomecompleto);

//Não podemos redeclarar variáveis com let no mesmo escopo
//let nome = "Mariana"; //Isso causará um erro

//Podemos usar var para declarar variáveis, mas é uma prática desaconselhada atualmente
//NAO USE VAR, prefira let ou const