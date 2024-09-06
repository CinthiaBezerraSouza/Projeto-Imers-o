## Assassins Creed - Busca de Jogos - Imersão Dev com o Google

### Descrição

Este projeto web simples permite aos usuários pesquisar por jogos da franquia Assassin's Creed. Ao digitar o nome de um jogo no campo de pesquisa, a página exibirá os resultados relevantes, incluindo título, descrição e um link para mais informações.

### Estrutura dos Arquivos

* **index.html:** O arquivo HTML principal que contém a estrutura da página, incluindo o formulário de pesquisa e a seção onde os resultados são exibidos.
* **style.css:** Arquivo CSS para estilizar a página e os elementos da interface do usuário.
* **dados.js:** Arquivo JavaScript que contém um array de objetos, cada um representando um jogo da franquia. Cada objeto possui as propriedades `titulo`, `descricao`, `tags` e `link`.
* **app.js:** Arquivo JavaScript que contém a lógica da aplicação, incluindo a função `pesquisar()` que é responsável por:
    * Obter o valor do campo de pesquisa.
    * Filtrar os dados dos jogos com base na pesquisa.
    * Construir a HTML para exibir os resultados.
    * Atualizar a seção de resultados na página.

### Como Usar

1. **Clonar o repositório:** Clone este repositório para sua máquina local.
2. **Abrir em um navegador:** Abra o arquivo `index.html` em um navegador web.
3. **Pesquisar:** Digite o nome de um jogo da franquia Assassin's Creed no campo de pesquisa e clique no botão "Pesquisar". Os resultados correspondentes serão exibidos abaixo.

### Funcionalidades

* **Pesquisa:** Permite pesquisar por jogos da franquia usando palavras-chave presentes no título, descrição ou tags.
* **Resultados dinâmicos:** Os resultados da pesquisa são atualizados em tempo real, à medida que o usuário digita.
* **Links para mais informações:** Cada resultado inclui um link que direciona o usuário para uma página externa com mais detalhes sobre o jogo.

### Próximos Passos

* **Melhoria da interface do usuário:** Implementar um design mais atraente e responsivo.
* **Funcionalidades adicionais:** Adicionar filtros por plataforma, data de lançamento, etc.
* **Integração com uma API:** Buscar dados dos jogos diretamente de uma API em vez de um arquivo local.

### Tecnologias Utilizadas

* **HTML:** Estrutura da página.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica da aplicação.

### Contribuições

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma sugestão de melhoria, por favor, abra um issue ou faça um pull request.
