# Edu-Connect UI

Este repositório contém o código-fonte da aplicação Edu-Connect UI. Siga as instruções abaixo para executar a aplicação em ambientes de desenvolvimento e produção.

## Execução em Desenvolvimento

### Pré-requisitos
- [API](https://github.com/marmota-alpina/Edu-Connect-API) em execução
- [Node.js](https://nodejs.org/) instalado
- [Angular CLI](https://angular.io/cli) instalado
- [Docker](https://docs.docker.com/) instalado (opcional para desenvolvimento)

### Passos

1. Clone o repositório:

    ```bash
    git clone https://github.com/marmota-alpina/edu-connect-ui.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd edu-connect-ui
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie a aplicação em modo de desenvolvimento:

    ```bash
    npm run start
    ```

   A aplicação estará disponível em `http://localhost:4200/`. O aplicativo será recarregado automaticamente quando você fizer alterações no código.

## Execução em Produção usando Docker

### Pré-requisitos
- [API](https://github.com/marmota-alpina/Edu-Connect-API) em execução
- [Docker](https://docs.docker.com/) instalado

### Passos

1. Clone o repositório (se ainda não tiver feito):

    ```bash
    git clone https://github.com/marmota-alpina/edu-connect-ui.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd edu-connect-ui
    ```

3. Execute o seguinte comando para construir e iniciar o contêiner Docker em modo de produção:

    ```bash
    docker-compose up --build -d
    ```

   A aplicação estará disponível em `http://localhost:8080/`.

   Para parar o contêiner, execute:

    ```bash
    docker-compose down
    ```

## Versões Utilizadas

- Angular CLI: 15.2.9
- Node: 18.12.0
- Package Manager: npm 8.19.2


