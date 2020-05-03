class App {
  constructor() {
    this.repositories = []; // lista de repositórios
    this.formElement = document.getElementById('repo-form'); // elemento do formulário
    this.registerHandlers(); // registrar as ações do usuário
  }

  /**
   * Registra os eventos do usuário
   */
  registerHandlers() {
    this.formElement.onsubmit = (event) => this.addRepository(event); // adiciona um repositório ao enviar o formulário
  }

  /**
   * Adiciona repositórios
   */
  addRepository(event) {
    event.preventDefault(); // previne o recarregamento da página
    this.repositories.push({
      name: 'Lucas Gabriel',
      description: 'descricao do repositorio descricao do repositorio descricao do repositorio descricao do repositorio',
      avatar_url: 'https://avatars0.githubusercontent.com/u/9625765?s=400&u=f123476bf3a0547ffc2dfacecbf65ea0a5fc6ebd&v=4',
      html_url: 'https://github.com/90lucasgabriel',
    }); // adicionando à lista com objeto desestruturado

    console.log(this.repositories);
  }
}

const app = new App();