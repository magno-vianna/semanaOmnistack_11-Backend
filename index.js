
const express = require('express');

const app = express(); 

/*
>>>>>>>>>>>>>>>Métodos HTTP<<<<<<<<<<<<<<<
GET:      Buscar um informação do Back-end 
POST:     Criar uma informação no Back-end 
PUT:    Alterar uma informação no Back-end 
DELETE: Deletar uma informação no Back-end 
>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<
*/

app.get('/', (Request, Response) =>{
    return Response.send('Hello'); 
  });

app.listen(3333);
