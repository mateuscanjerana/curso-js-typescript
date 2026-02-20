//Estrutura de repetição (loops)

for (let i = 0; i <= 5; i++){ //estrutura obrigatória: inicialização, condição e incremento
console.log(`Linha: ${i}`);
}//nao tem ";" no final
console.log('Fim do loop');

for(let i = 10; i <= 500; i += 10){ //incremento de 10 em 10
    console.log(`Linha: ${i}`);
}
console.log('Fim do loop');

for(let i = 500; i>=400; i-= 10){ //decremento de 10 em 10
    console.log(`Linha: ${i}`);
}
console.log('Fim do loop');

for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'é par' : 'é impar';
    console.log(i, par)
}
console.log('Fim do loop');

const frutas = ['Maçã', 'Pêra', 'Uva', 'Melão', 'Laranja', 'Ameixa'];
for (let i = 0; i < frutas.length; i++){
    console.log(`Índice : ${i}`, frutas[i]);
}