//Solução 1: Utilizzando Switch Case
const texto = document.querySelector('.container h2');
const data = new Date();




function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1:
        diaSemanaTexto = 'Segunda-Feira';
        return diaSemanaTexto;
        case 2:
        diaSemanaTexto = 'Terça-Feira';
        return diaSemanaTexto;
        case 3:
        diaSemanaTexto = 'Quarta-Feira';
        return diaSemanaTexto;
        case 4:
        diaSemanaTexto = 'Quinta-Feira';
        return diaSemanaTexto;
        case 5:
        diaSemanaTexto = 'Sexta-Feira';
        return diaSemanaTexto;
        case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
        default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}
function getNomeMes(numMes){
    let nomeMes;
    switch (numMes){
        case 0:
        nomeMes = 'Janeiro';
        return nomeMes;
        case 1:
        nomeMes = 'Fevereiro';
        return nomeMes;
        case 2:
        nomeMes = 'Março';
        return nomeMes;
        case 3:
        nomeMes = 'Abril';
        return nomeMes;
        case 4:
        nomeMes = 'Maio';
        return nomeMes;
        case 5:
        nomeMes = 'Junho';
        return nomeMes;
        case 6:
        nomeMes = 'Julho';
        return nomeMes;
        case 7:
        nomeMes = 'Agosto';
        return nomeMes;
        case 8:
        nomeMes = 'Setembro';
        return nomeMes;
        case 9:
        nomeMes = 'Outubro';
        return nomeMes;
        case 10:
        nomeMes = 'Novembro';
        return nomeMes;
        case 11:
        nomeMes = 'Dezembro';
        return nomeMes;
        default:
        nomeMes = '';
        return nomeMes;
    }
}
function criaData(data){
    const diaSemana = data.getDay();
    const numMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numMes);

    return `${nomeDia}, ${zeroEsquerda(data.getDate())} de ${nomeMes} de ${zeroEsquerda(data.getFullYear())} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`;
}
function zeroEsquerda(num){ //Função para adicionar um zero à esquerda de números menores que 10
    return num >= 10 ? num : `0${num}`;
}
texto.innerHTML = criaData(data);

//texto.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}); //Utilizando a função toLocaleDateString para formatar a data de acordo com o idioma e estilo desejado
