//Mais sobre Strings

let umaString = "Um \"texto\""; //O caractere de escape é a barra invertida (\) e ele é usado para indicar que o próximo caractere deve ser tratado de forma especial. No exemplo acima, a barra invertida é usada para escapar as aspas duplas dentro da string, permitindo que elas sejam incluídas sem encerrar a string.
console.log(umaString);
console.log(umaString[5]); //Acessando um caractere específico da string usando a notação de colchetes ([]). No exemplo, estamos acessando o caractere na posição 5 da string "Um \texto\"".

console.log(umaString.charAt(5)); //Outra forma de acessar um caractere específico da string é usando o método charAt(). Ele retorna o caractere na posição especificada. No exemplo, estamos usando charAt(5) para obter o mesmo resultado que a notação de colchetes.

console.log(umaString.concat(' em um lindo dia.')); //O método concat() é usado para concatenar (juntar) duas ou mais strings. No exemplo, estamos concatenando a string "Um \"texto\"" com a string " em um lindo dia.".
console.log(umaString + ' em um lindo dia.'); //Usando o operador de adição (+) para concatenar strings.
console.log(`${umaString} em um lindo dia.`); //Usando template literals (template strings) para concatenar strings de forma mais legível.
console.log(umaString.indexOf('texto')); //O método indexOf() é usado para encontrar a posição de uma substring dentro de uma string. No exemplo, estamos procurando a posição da substring "texto" dentro da string "Um \"texto\"". O método retorna o índice da primeira ocorrência da substring ou -1 se não for encontrada.
console.log(umaString.lastIndexOf('o')); //O método lastIndexOf() é semelhante ao indexOf(), mas ele procura a última ocorrência da substring em vez da primeira. No exemplo, estamos procurando a última ocorrência da letra "o" na string "Um \"texto\"". O método retorna o índice da última ocorrência ou -1 se não for encontrada.
console.log(umaString.match(/[a-z]/g)); //O método match() é usado para encontrar correspondências em uma string usando expressões regulares. No exemplo, estamos usando a expressão regular /[a-z]/g para encontrar todas as letras minúsculas na string "Um \"texto\"". O método retorna um array com todas as correspondências encontradas.
console.log(umaString.search(/x/)); //O método search() é usado para procurar a posição de uma correspondência em uma string usando expressões regulares. No exemplo, estamos procurando a posição da letra "x" na string "Um \"texto\"". O método retorna o índice da primeira ocorrência ou -1 se não for encontrada.
console.log(umaString.replace('Um', 'Outro')); //O método replace() é usado para substituir uma parte de uma string por outra. No exemplo, estamos substituindo a palavra "Um" por "Outro" na string "Um \"texto\"". O método retorna uma nova string com a substituição realizada.

let outraString = 'O rato roeu a roupa do rei de roma.';
console.log(outraString.replace(/r/g, 'l')); //O método replace() também pode usar expressões regulares. No exemplo, estamos substituindo todas as ocorrências da letra "r" pela letra "l" na string " Orato roeu a roupa do rei de Roma.". A expressão regular /r/g indica que queremos substituir todas as ocorrências (g de global).
console.log(outraString.length); //A propriedade length é usada para obter o comprimento de uma string, ou seja, o número de caracteres que ela contém. No exemplo, estamos obtendo o comprimento da string " O rato roeu a roupa do rei de roma."
console.log(outraString.slice(2, 6)); //O método slice() é usado para extrair uma parte de uma string, especificando o índice inicial e o índice final (não inclusivo). No exemplo, estamos extraindo os caracteres da posição 2 até a posição 6 da string " O rato roeu a roupa do rei de roma.".
console.log(outraString.slice(-5, -1)); //Quando um índice negativo é usado no método slice(), ele conta a partir do final da string. 
console.log(outraString.substring(outraString.length - 5, outraString.length -1)); 
console.log(outraString.split(' ', 2)); //O método split() é usado para dividir uma string em um array de substrings, com base em um separador especificado. No exemplo, estamos dividindo a string " O rato roeu a roupa do rei de roma." em um array de palavras, usando o espaço como separador.
console.log(outraString.toUpperCase()); //O método toUpperCase() é usado para converter todos os caracteres de uma string para maiúsculas. No exemplo, estamos convertendo a string " O rato roeu a roupa do rei de roma." para maiúsculas.
console.log(outraString.toLowerCase()); //O método toLowerCase() é usado para converter todos os caracteres de uma string para minúsculas. No exemplo, estamos convertendo a string " O rato roeu a roupa do rei de roma." para minúsculas.