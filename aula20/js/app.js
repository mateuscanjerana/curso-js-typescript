// O código define uma função chamada `meuEscopo` que é responsável por lidar com o evento de envio de um formulário. Dentro dessa função, o formulário é selecionado usando a classe 'form', e um ouvinte de evento é adicionado para o evento de submit do formulário. Quando o formulário é enviado, a função `recebeEventoForm` é chamada, que impede o comportamento padrão do formulário (recarregar a página) e exibe uma mensagem no console indicando que o formulário não foi enviado, juntamente com um contador que incrementa a cada envio. A função `meuEscopo` é então chamada para iniciar esse processo.
//Somente escopo de demosmstração!

function meuEscopo (){
    const form = document.querySelector('.form');// Seleciona o elemento do formulário usando a classe 'form'
    form.onsubmit = function(evento){ // O evento de submit é acionado quando o formulário é enviado
        evento.preventDefault(); // Evita o comportamento padrão do formulário, que é recarregar a página
        alert(1);
        console.log("Foi enviado");
    };
    let contador = 1; 
    function recebeEventoForm (evento){
        evento.preventDefault();
        console.log(`Formulario não foi enviado! ${contador}`);
    contador++;
    }
    form.addEventListener('submit' , recebeEventoForm);// Adiciona um ouvinte de evento para o evento de submit do formulário, chamando a função recebeEventoForm quando o formulário for enviado
}
meuEscopo();