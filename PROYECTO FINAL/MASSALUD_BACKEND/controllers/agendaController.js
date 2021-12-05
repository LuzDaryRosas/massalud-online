const connDB = require('../ConnectionDB/ConnDB');

const bcryptjs = require('bcryptjs');


// read -> GET
exports.readAll = async function (req, res) {

    try {
        const respuesta = await connDB.query('SELECT * from agenda');
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
        const respuesta = await connDB.query('SELECT * from agenda WHERE id = $1', [id]);
        console.log(respuesta.rows);
        res.status(200).json(respuesta.rows);
    }
    catch (err) {
        console.log(err);
    }

};


exports.readByDoctorAgenda = async function (req, res) {
    const iddoc = parseInt(req.params.iddoc); //req.query.id
    //const iddate = parseInt(req.query.iddate) //req.query.id
    const cdate = String(req.params.cdate); //req.query.id
    console.log(iddoc, cdate);
    try {
        /*
        SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID; */
        
    //const respuesta = await connDB.query('SELECT * from agenda WHERE id_doc = $1 AND fecha_cita >= $2', [iddoc, cdate]);
    const respuesta = await connDB.query('SELECT * from agenda INNER JOIN pacientes ON agenda.id_paciente=pacientes.id INNER JOIN franjas ON agenda.id_franja=franjas.id WHERE id_doctor = $1 AND fecha_cita >= $2', [iddoc, cdate]);

        console.log(respuesta.rows);
        res.status(200).json(respuesta.rows);
    }
    catch (err) {
        console.log(err);
    }

}; 


exports.readByPacienteFecha = async function (req, res) {
    const idpaciente = parseInt(req.params.idpaciente); //req.query.id
    const cdate = String(req.params.cdate); //req.query.id
    //const cdate= (Date.now());
    console.log(idpaciente, cdate);
    try {
        /*
        SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID; */
        
    //const respuesta = await connDB.query('SELECT * from agenda WHERE id_doc = $1 AND fecha_cita >= $2', [iddoc, cdate]);
    const respuesta = await connDB.query('SELECT * from agenda INNER JOIN doctor ON agenda.id_doctor=doctor.id INNER JOIN pacientes ON agenda.id_paciente=pacientes.id INNER JOIN franjas ON agenda.id_franja=franjas.id WHERE id_paciente = $1 AND fecha_cita >= $2', [idpaciente, cdate]);
    //const respuesta = await connDB.query('SELECT * from agenda INNER JOIN doctor ON agenda.id_doctor=doctor.id  WHERE id_paciente = $1 AND fecha_cita >= $2', [idpaciente, cdate]);    
        console.log(respuesta.rows);
        res.status(200).json(respuesta.rows);
    }
    catch (err) {
        console.log(err);
    }

}; 


exports.readByDoctorFecha = async function (req, res) {
    

    const iddoc = parseInt(req.params.iddoc); //req.query.id
    const cdate = String(req.params.cdate); 
    console.log(iddoc, cdate);
    try {
    
    const respuesta = await connDB.query('SELECT id_franja from agenda  WHERE id_doctor = $1 AND fecha_cita = $2', [iddoc, cdate]);    
    
    /* var infofranja=" ";
    res.json({
        message: 'Citas doctor por fecha',
        body: {
            agenda: {id_franja }
        }
    })
 */




        var id_ocupados=[];
       var id_all = Array.from(Array(17).keys()).slice(1,17); //tenias razon
       
       respuesta.rows.forEach(function(value, index, array){
            id_ocupados.push(value["id_franja"]-1); //value.id_franja
         });
        var id_desocupados = id_all.filter(x => !id_ocupados.includes(x));
        console.log(id_ocupados, id_desocupados);
        res.status(200).json(id_desocupados);
    }
    catch (err) {
        console.log(err);
    }

}; 



// create one-> POST
exports.create = async function (req, res) {

//  const { fecha_cita, id_doc, id_paciente, id_franja,codigo_cita,status_cita } = req.body;

 const { fecha_cita, id_doctor, id_paciente, id_franja,status } = req.body;


   

    const response = await connDB.query('INSERT INTO agenda (fecha_cita, id_doctor, id_paciente, id_franja,status) VALUES ($1, $2, $3, $4, $5) ', [fecha_cita,id_doctor,id_paciente,id_franja,status]);

    res.json({
        message: 'Cita Agregada - Recuerde estar 20 minutos antes de la cita ',
        body: {
            agenda: { fecha_cita, id_doctor, id_paciente, id_franja, status }
        }
    })


};

exports.delete = async function (req, res) {
    console.log('DELETE');
    const { fecha_cita, id_doctor, id_paciente, id_franja,status } = req.body;
    const id = parseInt(req.params.id)
    try {
        const respuesta = await connDB.query('DELETE from agenda WHERE id_cita = $1', [id]);
        console.log(respuesta.rows);
        res.json({
            message: 'Cita Eliminada',
            body: {
                agenda: { fecha_cita, id_doctor, id_paciente, id_franja, status }
            }
        })
    }
    catch (err) {
        console.log(err);
    }

};