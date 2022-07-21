import db from '../../libs/db.js';

export default async function handler(req, res){
    if(req.method !== 'POST') return res.status(405).end();

    await db('user').insert({
        name: req.body.name,
        username : req.body.username,
        password : req.body.password,
        plain : req.body.password
    }); 

    res.status(200).json({msg: 'Berhasil Tambah Data'});

    // const subcolumn = knex.avg('salary')
    // .from('employee')
    // .whereRaw('dept_no = e.dept_no')
    // .as('avg_sal_dept');

    // console.log(subcolumn);
}