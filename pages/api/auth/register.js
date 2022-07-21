import db from '../../../libs/db.js';
import bcrypt from 'bcryptjs';

export default async function handler(req, res){

    if(req.method !== 'POST') return res.status(405).end();

    const {name, username , password} = req.body;

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const user = await db('user').insert({
        name : name,
        username : username,
        password : passwordHash,
        plain : password
    });

    const data = await db('user').where({id: user}).first();

    res.status(200);
    res.json({
        msg : "Berhasil Daftar",
        data: data
    });

}