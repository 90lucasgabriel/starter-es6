class App {
  constructor() {
    this.repositories = []; // lista de repositórios
    this.formElement = document.getElementById('repo-form'); // elemento do formulário
    this.listElement = document.getElementById('repo-list'); // elemento da lista
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

    this.render();
  }

  render() {
    this.listElement.innerHTML = ''; // limpa a lista

    this.repositories.forEach(repository => {
      let imgElement = document.createElement('img'); // cria um elemento de imagem
      imgElement.setAttribute('src', repository.avatar_url); // acrescenta a origem da imagem como atributo

      let titleElement = document.createElement('strong'); // cria um elemento de texto
      titleElement.appendChild(document.createTextNode(repository.name)) // agrega o nome como conteúdo

      let descriptionElement = document.createElement('p'); // cria um elemento de parágrafo
      descriptionElement.appendChild(document.createTextNode(repository.description)); // agrega a descrição como conteúdo

      let linkElement = document.createElement('a'); // cria um elemento de link
      linkElement.setAttribute('target', '_blank'); // adiciona o atributo para abrir em outra aba
      linkElement.appendChild(document.createTextNode('Acessar')) // agrega o texto como conteúdo

      let listItemElement = document.createElement('li'); // cria um elemento de lista
      listItemElement.appendChild(imgElement); // agrega a imagem ao item da lista
      listItemElement.appendChild(titleElement); // agrega o título ao item da lista
      listItemElement.appendChild(descriptionElement); // agrega a descricao ao item da lista
      listItemElement.appendChild(linkElement); // agrega o link ao item da lista
      
      this.listElement.appendChild(listItemElement);
    });
  }
}

const app = new App();