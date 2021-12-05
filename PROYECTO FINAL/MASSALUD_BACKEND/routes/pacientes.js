var express = require('express');
var pacienteController = require('../controllers/pacienteController');
var paciente = express.Router();

/* GET users listing. */
paciente.route('/pacientes')
    .get(pacienteController.readAll);

paciente.route('/pacientes/:id')
    .get(pacienteController.readById);

paciente.route('/pacientes/:tdoc/:ndoc')
    .get(pacienteController.readByDoc);
//exports.readByDoc = async function (req, res) {


paciente.route('/pacientes')
    .post(pacienteController.create);

paciente.route('/pacientes/:id')
    .delete(pacienteController.delete);    

module.exports = paciente;
