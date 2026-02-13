const num = 12;
if(num >= 0 && num <= 5){ //Se isso ocorrer, faça isso
    console.log("Sim, o número está entre 0 e 5");
}else if(num >= 6 && num <= 8){
    console.log("Sim, o número está entre 6 e 8");
}
// else if (1 === 1){console.log('LITERAL');} //Quebraria o codigo, pois o "else if" precisa de um "if" para funcionar. O "else if" é utilizado para verificar uma nova condição caso a condição anterior seja falsa.
else if(num >= 9 && num <= 11){
    console.log("Sim, o número está entre 9 e 11");
}
else{ //Se isso não ocorrer, faça isso
    console.log("Não, o número não está entre 0 e 11");
}