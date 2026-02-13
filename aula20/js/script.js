function meuEscopo (){
    const form = document.querySelector('.form'); // seleciona o elemento com a classe form
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm (evento){// recebe o evento de submit do formulário
        evento.preventDefault();// impede que a página seja recarregada ao enviar o formulário
        const nome = form.querySelector('.nome');// seleciona o elemento com a classe nome dentro do formulário
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
// console.log(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push({// adiciona um objeto com as informações do formulário ao array pessoas
            nome:nome.value,// pega o valor do campo nome
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value
        })
        
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;// adiciona um parágrafo com as informações do formulário ao elemento resultado
    }
    form.addEventListener('submit' , recebeEventoForm);// adiciona um evento de submit ao formulário, que chama a função recebeEventoForm quando o formulário é enviado
}
meuEscopo();