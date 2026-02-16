//Minha solução: 
function zeroEsquerda(num){ //Função para adicionar um zero à esquerda de números menores que 10
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes()); 
}
function diaSemana(data) {
    const dia = data.getDay();
    let diaTexto;
    switch(dia){
        case 0:
            diaTexto = 'Domingo';
            break;
        case 1:
            diaTexto = 'Segunda';
            break;
        case 2:
            diaTexto = 'Terça';
            break;
        case 3:
            diaTexto = 'Quarta';
            break;
        case 4:
            diaTexto = 'Quinta';
            break;
        case 5:
            diaTexto = 'Sexta';
            break;
        case 6:
            diaTexto = 'Sábado';
            break;
        default:
            diaTexto = '';
    }
    return diaTexto;
}
function mesTexto(data) {
    const mes = data.getMonth();
    let mesTexto;
    switch(mes){
    case 0:
            mesTexto = 'Janeiro';
            break;
        case 1:
            mesTexto = 'Fevereiro';
            break;
        case 2:
            mesTexto = 'Março';
            break;
        case 3:
            mesTexto = 'Abril';
            break;
        case 4:
            mesTexto = 'Maio';
            break;
        case 5:
            mesTexto = 'Junho';
            break;
        case 6:
            mesTexto = 'Julho';
            break;
        case 7:
            mesTexto = 'Agosto';
            break;
        case 8:
            mesTexto = 'Setembro';
            break;
        case 9:
            mesTexto = 'Outubro';
            break;
        case 10:
            mesTexto = 'Novembro';
            break;
        case 11:
            mesTexto = 'Dezembro';
    }
    return mesTexto;
}
function msg(data) {
    const dia = diaSemana(data);
    const mes = mesTexto(data);
    return `${dia}, ${zeroEsquerda(data.getDate())} de ${mes} de ${zeroEsquerda(data.getFullYear())} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`;
}

const data = new Date(); 
console.log(msg(data));

const h1 = document.querySelector('.container h2');
h1.innerHTML = msg(new Date());
