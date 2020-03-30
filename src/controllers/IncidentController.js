const connection = require('../database/connection');

module.exports = {
    async create(Request, Response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization; 
                
        const [id] = await connection ('incidents').insert({
            title,
            description,
            value,
            ong_id,
     
        });
        
        return Response.json({ id });

    }

}