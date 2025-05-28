//Selecionar elementos

const itemSelecionado = document.querySelector('.item');

//document.getElementById('id-do-elemento');
//document.getElementsByClassName('classe-do-elemento');
//document.getElementsByTagName('tag-do-elemento');
//document.querySelector('seletor-css');
//document.querySelectorAll('seletor-css');

// manipular elementos

const item = document.querySelector('.item');

item.remove(); // remove o elemento
item.firstElementChild.remove(); // remove o primeiro filho do elemento
item.lastElementChild.remove(); // remove o último filho do elemento
item.children[0].remove(); // remove o primeiro filho do elemento
item.parentElement.removeChild(item); // remove o elemento  
item.classList.remove('novo-item'); // remove uma classe

item.classList.add('novo-item'); // adiciona uma classe

//Trocando os textos
item.textContent = 'Novo texto';
item.innerHTML = '<p>Novo texto</p>';

//Manipulando estilos
item.style.backgroundColor = 'red'; 

//Adicionando atributos
item.setAttribute('title', 'Novo título');
item.getAttribute('title'); // retorna o valor do atributo
item.removeAttribute('title'); // remove o atributo 

//EVENTOS
//Evento de clique
const button = document.querySelector('.button');
const input = document.querySelector('.input');

button.addEventListener('click', function() {
  console.log('Clicou'); // quando clica no botão

  const valor = input.value; //pegando valor do input
  console.log(valor);
}); 







