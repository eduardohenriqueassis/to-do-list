export default class RemoverTarefa {
  constructor(closer) {
    this.closers = document.querySelectorAll(closer);
  }

  // eslint-disable-next-line class-methods-use-this
  removerTarefa(closer) {
    closer.parentElement.remove();
  }

  addCloserEvent() {
    this.closers.forEach((closer) => {
      closer.addEventListener('click', () => this.removerTarefa(closer));
    });
  }
}
