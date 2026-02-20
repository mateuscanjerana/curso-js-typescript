//Atribuição via desestruturação (objetos)
const pessoa =  {
    // nome: 'Lucas',
    sobrenome: 'Santos',
    idade: 30,
    endereco:{
        rua: 'Rua dos Bobos',
        numero: 10
    }
};
const idade = pessoa.idade; //forma tradicional de acessar a propriedade idade do objeto pessoa
const {nome = 'Desconhecido', //valor padrão caso a propriedade não exista
     sobrenome: teste, //renomeando a propriedade sobrenome para teste
      } = pessoa; 
console.log(nome, teste, idade);
const {endereco: {rua, numero: n = '0'}, endereco} = pessoa; //desestruturando o objeto endereco dentro do objeto pessoa e acessando as propriedades rua e numero, além de acessar o objeto endereco completo
console.log(rua, n, endereco); //desestruturando o objeto endereco dentro do objeto pessoa e acessando a propriedade rua e renomeando a propriedade numero para n, além de acessar o objeto endereco completo

const pessoa2 = {
    nome1: 'Maria',
    sobrenome: 'Silva',
    idade: 25,
    endereco:{
        rua: 'Rua das Flores',
        numero: 20
    }
};
const {nome1, sobrenome, ...resto} = pessoa2; 
console.log(nome1, sobrenome, resto);