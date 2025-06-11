
// 1. For loop (com variável de controle)
//for(início ; teste ; incremento){}

for(let i = 0; i < 5; i++) {
    console.log(i);

}

//Exemplo
const carros = ['Ford', 'Chevrolet', 'Fiat', 'Volkswagen', 'Renault'];

for(let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}

//Outras maneira de fazer o mesmo exemplo
for(let i in carros) {
    console.log(carros[i]);
}

for(let carro of carros) {
    console.log(carro);
}   

carros.forEach(function(value, index) {
    console.log(index, value);
});


// 2. While loop (Repetição com teste no início)
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}


const carros = ['Ford', 'Chevrolet', 'Fiat', 'Volkswagen', 'Renault'];

let i = 0;
while(i < carros.length) {
    console.log(carros[i]);
    i++;
}


// 3. Do while loop (Repetição com teste no final)

let i = 0;
do {
    console.log(i);
    i++;
}
while(i < 5); 


