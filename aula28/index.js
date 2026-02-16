//Objeto date
// O objeto Date é utilizado para trabalhar com datas e horas em JavaScript. Ele fornece métodos para criar, manipular e formatar datas.
// 01/01/1970 Timestamp unix ou época unix
/*
const data = new Date(0); //Marco zero
console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000; //3 horas em milissegundos
const dataCerta = new Date(0 +tresHoras);
console.log(dataCerta.toString());

const umDia = 60 * 60 * 24 * 1000;
const dataUmDia = new Date(0 + tresHoras + umDia);
console.log(dataUmDia.toString());
*/
const data = new Date(2026 , 3, 20, 15, 14, 27, 1000); // YYYY, MM, DD, HH, mm, ss, ms
//3 = Abril, pois o mês começa em 0 
console.log(data.toString());

//Outro formato
const data1 = new Date('2019-04-20 20:15:59.100');// Formato mais utilizado
console.log(data1.toString());
console.log('Dia', data1.getDate()); //getDate() retorna o dia do mês (1-31)
console.log('Mês', data1.getMonth() + 1); //getMonth() retorna o mês (0-11), então adicionamos 1 para obter o número do mês correto
console.log('Ano', data1.getFullYear()); //getFullYear() retorna o ano com 4 dígitos (ex: 2021)
console.log('Horas', data1.getHours()); //getHours() retorna a hora (0-23)
console.log('Minutos', data1.getMinutes()); //getMinutes() retorna os minutos (0-59)
console.log('Segundos', data1.getSeconds()); //getSeconds() retorna os segundos (0-59)
console.log('Milesimos', data1.getMilliseconds()); //getMilliseconds() retorna os milissegundos (0-999)
console.log('Dia da Semana', data1.getDay()); //getDay() retorna o dia da semana (0-6), onde 0 é Domingo, ..., 6 é Sábado
console.log(Date.now()); //Date.now() retorna o número de milissegundos desde 01/01/1970
console.log(data1.toString());

function zeroEsquerda(num){ //Função para adicionar um zero à esquerda de números menores que 10
    return num >= 10 ? num : `0${num}`;
}
function formataData(data2){ //Função para formatar a data no formato DD/MM/YYYY HH:mm:ss
    const dia = zeroEsquerda(data2.getDate());
    const mes = zeroEsquerda(data2.getMonth() + 1);
    const ano = zeroEsquerda(data2.getFullYear());
    const hora = zeroEsquerda(data2.getHours());
    const min = zeroEsquerda(data2.getMinutes());
    const seg = zeroEsquerda(data2.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`; //Template string para formatar a data no formato desejado
}
const data2 = new Date();
const dataBrasil = formataData(data2);
console.log(dataBrasil);