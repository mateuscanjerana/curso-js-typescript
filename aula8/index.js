const nome = "Mateus";
const sobrenome = "Canjerana";
const idade = 25;
const peso = 66;
const altura = 1.79;
let imc;
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2026 - idade;

console.log(nome + " " + sobrenome + ", tem " + idade + " anos, pesa " + peso + "kg");
//template strings
console.log(`tem  ${altura} de altura e seu IMC é ${imc}`);
//concatenação
console.log(nome, " nasceu em ", anoNascimento);