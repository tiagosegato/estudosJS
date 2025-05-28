function sum (a, b) {
    console.log(a + b);
}

sum(2, 3); // 5

//outra maneuira de fazer a mesma coisa
function sum2(a, b){
    return a + b;
}

const resultado = sum2(2, 3);
console.log(resultado); // 5    


//arrow function
const sum3 = (a, b) => {
    return a + b;
}

ou 

const sum4 = (a, b) => a + b;



