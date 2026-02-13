//Objetos - Básico
const pessoa1 = { //Criando um objeto
    nome: 'João', //Atributo do objeto, são como variáveis dentro do objeto
    sobrenome: 'Silva',
    idade: 30
};
console.log(pessoa1.nome); //Acessando o atributo do objeto

//Função construtora de objetos
function criaPessoa(nome, sobrenome, idade) { //Entre parênteses, os parâmetros da função, que serão usados para criar o objeto
    return { //Retorna um objeto
        nome: nome, //propriedade:parametro
        sobrenome: sobrenome, 
        idade: idade
    };
}
//Forma abreviada, quando o nome da propriedade é igual ao nome do parâmetro:
//function criaPessoa(nome, sobrenome, idade) { 
//    return { nome, sobrenome, idade };
// } 
const pessoa2 = criaPessoa('Maria', 'Santos', 25); //Entre parênteses, os argumentos da função, que serão usados para criar o objeto
const pessoa3 = criaPessoa('Pedro', 'Almeida', 40);
const pessoa4 = criaPessoa('Ana', 'Costa', 35);
const pessoa5 = criaPessoa('Lucas', 'Ferreira', 28);
console.log(pessoa2.nome,pessoa3.nome ,pessoa4.nome, pessoa5.nome); //Acessando os atributos dos objetos criados pela função construtora

//Criando um método dentro do objeto, que é uma função associada a um objeto
const pessoa6 ={
    nome: 'Carla',
    sobrenome: 'Mendes',
    idade: 22,
    fala() { //Metodo do objeto, que é uma função associada ao objeto
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`); //Usando o this para acessar os atributos do objeto dentro do método
    }, // a vírgula é necessária para separar os métodos do objeto
    incrementaIdade() { //Outro método do objeto, que é uma função associada ao objeto
        this.idade++;
    },
    falaIdade() {
        console.log(`Tenho ${this.idade} anos.`); 
    }

    
};

pessoa6.fala(); //Chamando o método do objeto
pessoa6.incrementaIdade(); //Chamando o método para incrementar a idade
pessoa6.falaIdade(); 
pessoa6.incrementaIdade(); 
pessoa6.falaIdade(); 
pessoa6.incrementaIdade(); 
pessoa6.falaIdade(); 