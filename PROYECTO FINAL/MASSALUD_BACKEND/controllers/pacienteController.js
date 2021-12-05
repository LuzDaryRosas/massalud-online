const connDB = require('../ConnectionDB/ConnDB');

const bcryptjs = require('bcryptjs');


// read -> GET
exports.readAll = async function (req, res) {

    try {
        const respuesta = await connDB.query('SELECT * from pacientes');
        console.log(respuesta.rows);
        res.status(200).json(respuesta.rows);
    }
    catch (err) {
        console.log(err);
    }
};

// read one-> GET
exports.readById = async function (req, res) {
    const id = parseInt(req.params.id) //req.query.id
    try {
        const respuesta = await connDB.query('SELECT * from pacientes WHERE id = $1', [id]);
        console.log(respuesta.rows);
        res.status(200).json(respuesta.rows);
    }
    catch (err) {
        console.log(err);
    }

};

// read one-> GET
exports.readByDoc = async function (req, res) {
    const tdoc = req.params.tdoc //req.query.id
    const ndoc = parseInt(req.params.ndoc) //req.query.id

    try {
        const respuesta = await connDB.query('SELECT * from pacientes WHERE numero_documento = $2 and tipo_documento = $1', [tdoc,ndoc]);
        console.log(respuesta.rows);
        res.status(200).json(respuesta.rows);
    }
    catch (err) {
        console.log(err);
    }

};


// create one-> POST
exports.create = async function (req, res) {

    const { nombres,apellidos,tipo_documento,numero_documento,fecha_nacimiento,numero_celular,correo_electronico } = req.body;

    
    const response = await connDB.query('INSERT INTO pacientes (nombres,apellidos,tipo_documento,numero_documento,fecha_nacimiento,numero_celular,correo_electronico) VALUES ($1, $2, $3, $4, $5, $6, $7) ', [nombres,apellidos,tipo_documento,numero_documento,fecha_nacimiento,numero_celular,correo_electronico]);

    res.json({
        message: 'Paciente agregado',
        body: {
            usuario: { nombres,apellidos,tipo_documento,numero_documento,fecha_nacimiento,numero_celular,correo_electronico }
        }
    })


};

exports.delete = async function (req, res) {
    console.log('DELETE');
    const id = parseInt(req.params.id)
    try {
        const respuesta = await connDB.query('DELETE from pacientes WHERE id = $1', [id]);
        console.log(respuesta.rows);
        res.json({
            message: 'Paciente Borrado',
            body: {
                paciente: { id }
            }
        })
    }
    catch (err) {
        console.log(err);
    }

};