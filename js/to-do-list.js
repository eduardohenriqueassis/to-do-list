export default class ToDoList {
  constructor(input, ul, closer, adicionar) {
    this.input = document.querySelector(input);
    this.ul = document.querySelector(ul);
    this.button = document.querySelector(adicionar);
    this.closer = closer;

    this.eventAdicionarTarefa = this.eventAdicionarTarefa.bind(this);
    this.removerTarefa = this.removerTarefa.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this

  adicionarTarefa() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const novaTarefa = document.createElement('li');
    const p = document.createElement('p');
    const createCloser = document.createElement('div');
    if (this.input.value === '') {
      // eslint-disable-next-line no-alert
      alert('Insira sua tarefa!');
    } else {
      this.ul.appendChild(novaTarefa);
      novaTarefa.appendChild(checkbox);
      novaTarefa.appendChild(p);
      p.innerHTML = this.input.value;
      this.input.value = '';
      novaTarefa.appendChild(createCloser);
      createCloser.classList.add('closer');
    }
  }

  eventAdicionarTarefa(event) {
    event.preventDefault();
    this.adicionarTarefa();
    this.addCloserEvent();
  }

  // eslint-disable-next-line class-methods-use-this

  addButtonEvent() {
    this.button.addEventListener('click', this.eventAdicionarTarefa);
  }

  // eslint-disable-next-line class-methods-use-this
  removerTarefa(closer) {
    closer.parentElement.remove();
  }

  addCloserEvent() {
    const closers = document.querySelectorAll(this.closer);
    closers.forEach((closer) => {
      closer.addEventListener('click', () => this.removerTarefa(closer));
    });
  }

  init() {
    this.addButtonEvent();
    return this;
  }
}

// removerTarefa();
