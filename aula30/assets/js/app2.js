// Solução 2: Utilizando Arrays
const texto = document.querySelector('.container h2');
const data = new Date();

function getDiaSemanaTexto(diaSemana){
    const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return diasSemana[diaSemana];
}
function getNomeMes(numMes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numMes];
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