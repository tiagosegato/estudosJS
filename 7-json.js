const todos = [
    {
        id: 1,
        texto: "Tomar café",
        completo: false
    },
    {
        id: 2,
        texto: "Estudar",
        completo: true
    },
    {
        id: 3,
        texto: "Treinar",
        completo: false
    }
]

// Convertendo o array de objetos para JSON = String
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// Convertendo JSON para array de objetos
const todoArray = JSON.parse(todoJSON);
console.log(todoArray); 
