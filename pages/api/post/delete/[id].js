import db from '../../../../libs/db.js';

export default async function handler(req, res){
    if(req.method !== 'DELETE') return res.status(405).end();

    const {id} = req.query;

    await db('post').where({id}).delete();

    res.status(200);
    res.json({
        msg: 'Berhasil hapus Data'
    });
}