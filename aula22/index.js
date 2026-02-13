//Operadores Logicos:
// && (AND) - Retorna true se ambos os operandos forem true
// || (OR) - Retorna true se pelo menos um dos operandos for true
// ! (NOT) - Inverte o valor lógico do operando

const expressaoAnd = true && true && false && true;
const expressaoOr = true || false;
console.log(expressaoAnd , expressaoOr);
console.log(!true , !false);