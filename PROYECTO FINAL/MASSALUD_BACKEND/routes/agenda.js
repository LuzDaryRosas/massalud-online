var express = require('express');
var agendaController = require('../controllers/agendaController');
var agenda = express.Router();

/* GET users listing. */
agenda.route('/agenda')
    .get(agendaController.readAll);

agenda.route('/agendaDoctores/:iddoc/:cdate')
    .get(agendaController.readByDoctorAgenda);

agenda.route('/agendaDoctorFecha/:iddoc/:cdate')
    .get(agendaController.readByDoctorAgenda);

agenda.route('/agendaPacienteFecha/:idpaciente/:cdate')
    .get(agendaController.readByPacienteFecha);


agenda.route('/agenda/:id')
    .get(agendaController.readById);

agenda.route('/agenda')
    .post(agendaController.create);

agenda.route('/agenda/:id')
    .delete(agendaController.delete);    

module.exports = agenda;
