function imc(){
    const form = document.querySelector('.form'); // seleciona o form
    form.addEventListener('submit', function(e){ //adiciona um evento de submit no form
        e.preventDefault(); // impede o comportamento padrão do form de enviar os dados e recarregar a página
        const inputPeso = e.target.querySelector('#peso'); // seleciona o input de peso dentro do form
        const inputAltura = e.target.querySelector('#altura'); // seleciona o input de altura dentro do form
        const peso = Number(inputPeso.value); // converte o valor do input de peso para número
        const altura = Number(inputAltura.value); // converte o valor do input de altura para número
        if(!peso){ // verifica se o peso é válido (não é um número ou é zero)
            setResultado('Peso invalido', false)
            return;
        }
        if(!altura){ // verifica se a altura é válida (não é um número ou é zero)
            setResultado('Altura invalida', false)
            return;
        }
        const imc = getImc(peso, altura); // calcula o imc usando a função getImc que recebe o peso e a altura como parâmetros
        const nivelImc = getNivelImc(imc); // determina o nível do imc usando a função getNivelImc que recebe o imc como parâmetro e retorna uma string com o nível correspondente
        const msg = `Seu IMC é ${imc}! (${nivelImc})`; // cria uma mensagem com o valor do imc e o nível correspondente
        setResultado(msg, true); // exibe a mensagem de resultado usando a função setResultado que recebe a mensagem e um booleano indicando se é um resultado válido ou não
    });
    function getNivelImc(imc){ // função que recebe o imc como parâmetro e retorna uma string com o nível correspondente
        const nivel = ['Peso abaixo do ideal', 'Peso Normal', 'Sobrepeso', 'Obesidado grau 1', 'Obesidado grau 2', 'Obesidado grau 3'];

        if(imc >= 39.9){
            return nivel[5];
        }
        if (imc >= 34.9){
            return nivel[4];
        }
        if (imc >= 29.9){
            return nivel[3];
        }
        if (imc >= 24.9){
            return nivel[2];
        }
        if (imc >= 18.5){
            return nivel[1];
        }
        if (imc < 18.5){
            return nivel[0];
        }
    }
    function getImc(peso, altura){ // função que recebe o peso e a altura como parâmetros e retorna o valor do imc calculado usando a fórmula peso / altura ao quadrado, arredondado para duas casas decimais
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }
    function criaP(){ // função que cria um elemento de parágrafo (p) e retorna esse elemento para ser usado na função setResultado
        const p = document.createElement('p');
        return p;
    }
    function setResultado(msg, isValid){ // função que recebe a mensagem e um booleano indicando se é um resultado válido ou não, e exibe a mensagem de resultado na página
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = criaP(); // cria um elemento de parágrafo usando a função criaP
        if(isValid){ // verifica se o resultado é válido e adiciona uma classe CSS diferente para estilizar a mensagem de acordo com o resultado
            p.classList.add('paragrafo-resultado');
        }else{
            p.classList.add('paragrafo-bad');
        }
        p.innerHTML = msg;
        resultado.appendChild(p); // adiciona o elemento de parágrafo com a mensagem ao elemento de resultado na página
    }
    
}
imc();