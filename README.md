Semana Omnistack 11 Back-end
Passos do desenvolvimento da aplicação.

Importando dependências do Express
const express = require('express');
const app = express();

Rotas e recurso
app.get('/', (Request, Response) =>{
return Response.send('Hello');
});

app.listen(3333);

Métodos HTTP
GET: Buscar ou listar uma informação do Back-end.

POST: Criar uma informação no Back-end.

PUT: Alterar uma informação no Back-end.

DELETE: Deletar uma informação no Back-end.

Tipos de parâmetros
Query Params: Parâmetros nomeados enviados na rota após " ?" (Filtros e paginação).

route Params: Parâmetros utilizados para identificar recursos.

Request body: Corpo da requisição, utilizado para criar ou alterar recurso.

Instalando e configurando o Nodemon
Diferenças entre banco de dados
Relacional ou não relacional.

Utilizaremos um banco Relacional para o projeto com o "SQLiite"

Driver: Knex.js npm install knex

Instalação do Banco: npm install sqlite3

Executar o pacote knex: npx knex init

Pensando nas entidades e funcionalidades
Entidades
ONG

Caso (incident)

Funcionalidades
Login de ONG

Logout de ONG

Cadastro de ONG

Cadastro novos casos

Deletar casos

Listar casos específicos de uma ONG

Listar todos os casos

Entrar em contato com a ONG

Contrução do back-end
Adicionando módulo CORS
