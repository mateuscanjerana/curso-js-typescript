//Estrutura condicional
// if, else if, else
/*
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite
*/
const hora = 20;
if(hora >= 0 && hora <= 11){
    console.log("Bom dia!");
}else if (hora >= 12 && hora <=17){
    console.log("Boa tarde!");
}else if (hora >=18 && hora <= 23){
    console.log("Boa noite!");
}else{
    console.log("Olá");
}
//"if" pode ser utilizado sozinho, porém "else if" e "else" precisam de um "if" para funcionar. Podemos ter vários "else if", mas apenas um "else". O "else" é opcional. O "else" é utilizado para executar um bloco de código caso nenhuma das condições anteriores seja verdadeira.