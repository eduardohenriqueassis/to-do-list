// eslint-disable-next-line import/extensions
import ToDoList from './to-do-list.js';

// adicionarTarefa();
const adicionarTarefa = new ToDoList(
  '#input-tarefa',
  'ul',
  '.closer',
  '.btn-adicionar',
);

adicionarTarefa.init();
