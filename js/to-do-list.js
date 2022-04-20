export default class ToDoList {
  constructor(input, ul, closer, adicionar) {
    this.input = document.querySelector(input);
    this.ul = document.querySelector(ul);
    this.button = document.querySelector(adicionar);
    this.closer = closer;

    // criar elementos
    this.checkbox = 'input';
    this.li = 'li';
    this.p = 'p';
    this.div = 'div';

    this.eventAdicionarTarefa = this.eventAdicionarTarefa.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this

  adicionarTarefa() {
    const checkbox = document.createElement(this.checkbox);
    checkbox.type = 'checkbox';
    const novaTarefa = document.createElement(this.li);
    const p = document.createElement(this.p);
    const createCloser = document.createElement(this.div);
    if (this.input.value === '') {
      this.input.classList.add('vazio');
      this.input.nextElementSibling.innerText = 'Preencha sua tarefa!';
    } else {
      this.input.classList.remove('vazio');
      this.input.nextElementSibling.innerText = '';
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
