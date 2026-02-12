//Funções: funções executam ações!
function minhaFuncao() {
    console.log("Olá, mundo!");
}
minhaFuncao(); //Chamando a função para executar a ação definida dentro dela

//Função com parâmetros
function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`);
}
const variavel = saudacao("João"); //Chamando a função com um argumento para o parâmetro "nome"
console.log(variavel); //A função saudacao não retorna nada, então variavel será undefined

//Função com retorno
function saudacao2(nome) {
    return `Bom dia, ${nome}!`;
}
const variavel2 = saudacao2("Maria"); //Chamando a função e armazenando o valor retornado em variavel2
console.log(variavel2); //Agora variavel2 contém a string retornada pela função saudacaoCompleta

//Função com múltiplos parâmetros
function soma(a, b) {
    return a + b; //A função retorna a soma dos dois parâmetros
}
console.log(soma(5, 3)); //Chamando a função soma com os argumentos 5 e 3, e imprimindo o resultado (8)
console.log(soma(10, 20));
// console.log(resultado); //Isso causará um erro, pois a variável resultado não foi definida
const resultado = soma(7, 2); //Definindo a variável resultado com o valor retornado pela função soma
console.log(resultado); //Agora podemos imprimir o valor de resultado, que é 9

//return é usado para enviar um valor de volta para quem chamou a função, e também para encerrar a execução da função. Valores apos o return não serão executados, pois a função já terá sido encerrada. Por exemplo:
function exemploReturn() {
    console.log("Antes do return");
    return "Valor retornado";
    console.log("Depois do return"); //Essa linha não será executada
}
console.log(exemploReturn()); //Chamando a função e imprimindo o valor retornado

//Função com valor padrão para parâmetros
function soma1(x ='Nome', y = 2) {
    const resultado = x + y;
    return resultado;
}
console.log(soma1()); //Chamando a função sem argumentos
console.log(soma1(5));

//Função anônima: é uma função sem nome, geralmente atribuída a uma variável ou usada como argumento para outra função. Por exemplo:
const raiz = function(n){
    return n ** 0.5; //Calculando a raiz quadrada de n
}; //Terminar com ponto e vírgula, pois estamos atribuindo a função a uma variável
console.log(raiz(16)); //Chamando a função raiz 

//Função arrow: é uma forma mais concisa de escrever funções anônimas, usando a sintaxe "=>" para definir a função. Por exemplo:
const raiz2 = n => n ** 0.5;
console.log(raiz2(25)); //Chamando a função raiz2