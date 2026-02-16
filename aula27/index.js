//Operação ternária
//(condição) ? true : false
const pontuacaoUsuario = 1001;
/*
if(pontuacaoUsuario >= 1000){
    console.log('Usuarioa VIP');
}else{
    console.log('Usuario Normal');
}
*/
//ou podemos encurtar assim:
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal'; 
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; //fallback operator - se a corUsuario for null ou undefined, ele vai usar a corPadrao
console.log(corPadrao);