//Condições Simples

var velocidade = 60;

if (velocidade > 80) {
  console.log('Você foi multado');
} 

//Condições Compostas

var idade = 30;

if (idade >= 18) {
  console.log('Você é maior de idade');
} else {
  console.log('Você é menor de idade');
}

//Condições Aninhadas

var idade = 18;

if (idade < 10) {
  console.log('Não pode entrar');
} else if (idade >= 10 && idade < 18) { //pode usar o && ou o || para fazer comparações  
  console.log('Pode entrar, acompanhado');
} else {
    console.log('Pode entrar sozinho');
}


//Operador ternário
num = 2
resultado = (num % 2 == 0) ? 'Par' : 'Ímpar';
console.log(resultado);


//Condições Múltiplas - utilizada para valores fixos

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