const express = require('express'); 

const routes = express.Router();  


routes.get('/', (Request, Response) =>{
    return Response.send('Hello word'); 
  });



module.exports = routes;        