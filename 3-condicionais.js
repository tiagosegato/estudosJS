const sum = 1 + 3;

if (sum === 2) {
  console.log('A soma é 2');
} else if (sum === 3) {
    console.log('A soma não é 2');
} else {
  console.log('A soma não é 2 nem 3');
}


const idade = 18;

//pode usar o && ou o || para fazer comparações
if (idade < 10) {
  console.log('Não pode entrar');
} else if (idade > 11 && idade <= 18) {    
  console.log('Maior de 11 e menor ou igual a 18');
} else {
    console.log('Ultrapassou, pode entrar');
}

//ternary operator
let number = sum === 2 ? 'A soma é 2' : 'A soma não é 2';
console.log(number);

//switch case
const fruit = 'banana';

switch (fruit) {
  case 'banana':
    console.log('R$ 3,00 / kg');
    break;
  case 'maçã':
    console.log('R$ 2,00 / kg');
    break;
  default:
    console.log('Produto não existe no estoque');
}