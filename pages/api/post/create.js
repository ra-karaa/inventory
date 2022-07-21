import db from '../../../libs/db.js';

export default async function handler(req, res){

    if(req.method !== 'POST') return res.status(405).end();

    const {title, konten} = req.body;

    const input = await db('post').insert({
        title : title, 
        konten : konten, 
        user_id : "1"
    });

    const data = await db('post').where('id', input).first();

    res.status(200);
    res.json({
        msg: 'Berhasil Tambah Data',
        data : data
    });

}