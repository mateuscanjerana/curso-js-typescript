//Arrays - basico
const alunos = ['João', 'Maria', 'Pedro']; //Está criando um array chamado "alunos" com três elementos: 'João', 'Maria' e 'Pedro'. Eles estão organizados em uma lista, onde cada elemento tem um índice associado (0 para 'João', 1 para 'Maria' e 2 para 'Pedro').
console.log(alunos); 
console.log(alunos[0]); //Acessando elementos do array
alunos[1] = 'Ana'; //Modificando elementos do array
console.log(alunos);
console.log(alunos.length); //Obtendo o tamanho do array
alunos[3] = 'Carlos'; //Adicionando um novo elemento ao array
alunos[alunos.length] = 'Luiza'; //Outra forma de adicionar um novo elemento ao array
console.log(alunos);
//Usando o método push para adicionar um novo elemento ao final do array
alunos.push('Marcos'); 
console.log(alunos);
//Usando o método unshift para adicionar um novo elemento no início do array
alunos.unshift('Sofia'); 
console.log(alunos);
//Usando o método pop para remover o último elemento do array
const removido = alunos.pop();
console.log(removido);
console.log(alunos);
//Usando o método shift para remover o primeiro elemento do array
const removido2 = alunos.shift();
console.log(removido2);
console.log(alunos);
//Usando o método delete para remover elementos do array, mas isso deixa um "buraco" no array, ou seja, o índice do elemento removido ainda existe, mas seu valor é undefined.
delete alunos[1]; 
console.log(alunos);
//Usando o método splice para remover elementos do array, sem deixar "buracos". O primeiro parâmetro é o índice de início, e o segundo parâmetro é o número de elementos a serem removidos.
alunos.splice(1, 1); 
console.log(alunos);
console.log(alunos.slice(0, - 2));

console.log(typeof alunos); //Verificando o tipo do array
console.log(alunos instanceof Array); //Verificando se a variável é uma instância de Array