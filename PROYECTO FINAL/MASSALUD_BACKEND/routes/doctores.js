var express = require('express');
var doctorController = require('../controllers/doctorController');
var doctor = express.Router();

/* GET users listing. */
doctor.route('/doctores')
    .get(doctorController.readAll);

doctor.route('/doctores/:id')
    .get(doctorController.readById);

doctor.route('/doctores')
    .post(doctorController.create);

doctor.route('/doctores/:id')
    .delete(doctorController.delete);    

doctor.route('/doctores/:id')
    .put(doctorController.update); 


// adicione esto
//doctor.route('/doctores/:correo_electronico/:clave')
doctor.route('/doctores/email/:correo_e')
    .get(doctorController.readBycorreo);

doctor.route('/doctores/especialidad/:especialidad')
    .get(doctorController.readByEspecialidad);


module.exports = doctor;
