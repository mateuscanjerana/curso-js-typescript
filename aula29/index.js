//Switch Case
//O Switch Case é mais fácil de ler e entender, além de ser mais fácil de escrever, pois não precisamos escrever tantas vezes o if e else if, além de ser mais fácil de manter, pois se quisermos adicionar um novo dia da semana, basta adicionar um novo case, sem precisar modificar o código existente.

const data = new Date('1987-03-24 00:00:00');
let diaSemana = data.getDay();
// diaSemana = 7;
let diaSemanaTexto;

/*
if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
}else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda';
}else if (diaSemana === 2){
    diaSemanaTexto = 'Terça';
}else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta';
}else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta';
}else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta';
}else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
}else{
    diaSemanaTexto = '';
}
*/
// ou podemos usar o Switch Case para resolver o mesmo problema
switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
}
console.log(diaSemana, diaSemanaTexto);
//ou podemos utilizar uma função com o Switch Case dentro e reutilizar ao longo do código
/*
function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
        case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
        case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
        case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
        case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
        case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
        default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}
diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);
*/