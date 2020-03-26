const express = require('express');

const app = express(); 

app.get('/', (Request, Response) =>{
    return Response.send('Hello'); 
  });

app.listen(3333);
