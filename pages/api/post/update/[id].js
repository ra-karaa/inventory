import db from '../../../../libs/db.js';

export default async function handler(req, res){
    if(req.method !== 'PUT') return res.status(405).end();

    const { id } = req.query;
    const {title, kontent} = req.body;

    await db('post').where({id}).update({
        title :title, 
        konten : kontent
    });

    const updateData = await db('post').where({id}).first();

    res.status(200);
    res.json({
        msg: 'Berhasil Perbarui Data',
        data : updateData
    });
}