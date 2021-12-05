const connDB = require('../ConnectionDB/ConnDB');

const bcryptjs = require('bcryptjs');


// read -> GET
exports.readAll = async function (req, res) {

    try {
        const respuesta = await connDB.query('SELECT * from doctor');
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
        const respuesta = await connDB.query('SELECT * FROM doctor WHERE id = $1', [id]);
        console.log(respuesta.rows);
        res.status(200).json(respuesta.rows);
    }
    catch (err) {
        console.log(err);
    }

};



// create one-> POST
exports.create = async function (req, res) {

    const { nombre_completo, especialidad, tarjeta_profesional,correo_electronico, clave } = req.body;

    //let passwordHash = await bcryptjs.hash(password, 10);
    //console.log(passwordHash);

    const response = await connDB.query('INSERT INTO doctor(nombre_completo, especialidad, tarjeta_profesional, correo_electronico,clave) VALUES ($1, $2, $3, $4, $5) ', [nombre_completo, especialidad, tarjeta_profesional,correo_electronico,clave]);

    res.json({
        message: 'Doctor Ingresado',
        body: {
            doctor: { nombre_completo, especialidad, tarjeta_profesional,correo_electronico,clave}
        }
    })


};

exports.delete = async function (req, res) {
    console.log('DELETE');
    const id = parseInt(req.params.id);
    const {nombre_completo}=req.body;
    try {
        const respuesta = await connDB.query('DELETE from doctor WHERE id = $1', [id]);
        console.log(respuesta.rows);
        console.log(id);
        res.json({
            message: 'Doctor Eliminado',
            body: {
                doctor: {nombre_completo}
            }
        })
    }
    catch (err) {
        console.log(err);
    }

};


// update one-> PUT




exports.update = async function (req, res) {
    const id = parseInt(req.params.id)

    const { nombre_completo,especialidad, tarjeta_profesional,correo_electronico,clave } = req.body;

    const response = await connDB.query('UPDATE doctor SET nombre_completo = $1, especialidad=$2, tarjeta_profesional=$3, correo_electronico = $4, clave=$5  WHERE id = $4 ', [nombre_completo, especialidad, tarjeta_profesional,correo_electronico,clave]);
    console.log(response);
    res.json({
        message: 'Doctor Modificado',
        body: {
            doctor: req.body
        }
    })
};

// ingrese esta parte
exports.readBycorreo = async function (req, res) {
    const correo_e = req.params.correo_e 
    //const clave = req.params.clave

    try {
        //const respuesta = await connDB.query('SELECT * from doctor WHERE correo_electronico = $1 and clave=$2', [correo_e,clave]);
        const respuesta = await connDB.query(`SELECT * from doctor WHERE correo_electronico = '${correo_e}' `);
        console.log(respuesta.rows);
        res.status(200).json(respuesta.rows);
    }
    catch (err) {
        console.log(err);
    }

};


exports.readByEspecialidad = async function (req, res) {
    const especialidad = req.params.especialidad 
    //const clave = req.params.clave

    try {
        //const respuesta = await connDB.query('SELECT * from doctor WHERE correo_electronico = $1 and clave=$2', [correo_e,clave]);
        const respuesta = await connDB.query(`SELECT * from doctor WHERE especialidad = '${especialidad}' `);
        console.log(respuesta.rows);
        res.status(200).json(respuesta.rows);
    }
    catch (err) {
        console.log(err);
    }

};
