const express = require('express'); 
const crypto = require('crypto');
const connection = require('./database/connection'); 
const routes = express.Router();  


routes.post('/ongs', async (Request, Response) =>{
    const { name, email, whatsapp, city, uf } = Request.body;
    
    const id = crypto.randomBytes(4).toString('HEX'); 

    await connection('ongs').insert({
    
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
      
    });
    
    return Response.json({ id });
  
  });



module.exports = routes;        