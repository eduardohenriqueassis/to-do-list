const toDoList = [
  { tarefa: 'Limpar a casa', prioridade: 1 },
  { tarefa: 'Lavar o Carro', prioridade: 2 },
];

const adicionar = document.querySelector('.adicionar');
let input = document.querySelector('.input-tarefa');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

adicionar.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const novaTarefa = document.createElement('li');
  const p = document.createElement('p');

  if (input.value === '') {
    alert('Insira sua tarefa!');
  } else {
    ul.appendChild(novaTarefa);
    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(p);
    p.innerHTML = input.value;
    input.value = '';
  }
}
