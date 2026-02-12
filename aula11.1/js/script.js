/*
alert('Olá Mundo!'); 
//Alert é um atalho para "window.alert()". Ele exibe uma caixa de diálogo com uma mensagem e um botão "OK". O código acima exibe a mensagem "Olá Mundo!" em uma caixa de diálogo.
//Window é um objeto global que representa a janela do navegador. Ele contém propriedades e métodos para controlar a janela, como abrir novas janelas, redimensionar a janela, etc. O método "alert()" é um método do objeto "window" que exibe uma caixa de diálogo com uma mensagem e um botão "OK".

confirm('Deseja continuar?'); 
//Confirm é um atalho para "window.confirm()". Ele exibe uma caixa de diálogo com uma mensagem e dois botões: "OK" e "Cancelar". O código acima exibe a mensagem "Deseja continuar?" em uma caixa de diálogo e retorna "true" se o usuário clicar em "OK" e "false" se o usuário clicar em "Cancelar".

prompt('Digite seu nome:'); 
//Prompt é um atalho para "window.prompt()". Ele exibe uma caixa de diálogo com uma mensagem, um campo de entrada de texto e dois botões: "OK" e "Cancelar". O código acima exibe a mensagem "Digite seu nome:" em uma caixa de diálogo e retorna o valor digitado pelo usuário se ele clicar em "OK" ou "null" se ele clicar em "Cancelar".

let confirma = confirm('Realmente deseja apagar?'); 
//O código acima exibe a mensagem "Realmente deseja apagar?" em uma caixa de diálogo e armazena o valor retornado (true ou false) na variável "confirma". Se o usuário clicar em "OK", a variável "confirma" terá o valor "true". Se o usuário clicar em "Cancelar", a variável "confirma" terá o valor "false".
*/

let num1 = prompt('Digite o primeiro número:'); //O código acima exibe a mensagem "Digite o primeiro número:" em uma caixa de diálogo e armazena o valor digitado pelo usuário na variável "num1". O valor retornado é uma string, então é necessário convertê-lo para um número usando a função "Number()" ou "parseInt()" ou "parseFloat()".
let num2 = prompt('Digite o segundo número:'); 

num1 = parseInt(num1); 
num2 = Number(num2); 

const resultado = num1 + num2; 
alert('O resultado da soma é: ' + resultado); //O código acima exibe a mensagem "O resultado da soma é: " seguida do valor da variável "resultado" em uma caixa de diálogo.