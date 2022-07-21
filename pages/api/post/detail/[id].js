import db from '../../../../libs/db.js';

export default async function handler(req, res){
    if(req.method !== 'GET') return res.status(405).end();

    const {id} = req.query;

    const data = await db('post').where({id}).first();

    res.status(200);
    res.json(data
    );
}