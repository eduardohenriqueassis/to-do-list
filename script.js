const toDoList = [
  { tarefa: 'Limpar a casa', prioridade: 1 },
  { tarefa: 'Lavar o Carro', prioridade: 2 },
];

const adicionar = document.querySelector('.adicionar');
let input = document.querySelector('.input-tarefa');
const ul = document.querySelector('ul');

adicionar.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const novaTarefa = document.createElement('li');
  const p = document.createElement('p');
  const createCloser = document.createElement('div');

  if (input.value === '') {
    alert('Insira sua tarefa!');
  } else {
    ul.appendChild(novaTarefa);
    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(p);
    p.innerHTML = input.value;
    input.value = '';
    novaTarefa.appendChild(createCloser);
    createCloser.classList.add('closer');
  }

  removerTarefa();
}

function removerTarefa() {
  const closers = document.querySelectorAll('.closer');
  closers.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      btn.parentElement.remove();
    });
  });
}

removerTarefa();
