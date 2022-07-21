import db from '../../../libs/db.js';

export default async function handler(req, res){

    if(req.method !== 'GET') return res.status(405).end();

    const data = await db('post');

    res.status(200);
    res.json({
        msg: 'Data Postingan',
        data: data
    });

}