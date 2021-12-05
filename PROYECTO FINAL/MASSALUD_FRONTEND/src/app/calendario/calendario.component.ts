import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { PacienteService } from '../services/paciente.service';
import {DoctorService} from '../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  citaForm = {
    fecha_cita: "", 
    id_paciente:"", 
    id_doctor:"", 
    id_franja:"", 
    status:"Asignada",
   
    
  }
  doctorForm ={
    iddoc:"",
  }
  doctores:any;
  dataCita:any;
  
  dataDoctor:any;
  pacienteForm = {
    tipo_documento: "", 
    numero_documento: "",
  }
  dataPaciente:any ={};
  pacienteEncontrado = false;





  constructor(private pacienteService: PacienteService, 
    private agendaService: AgendaService,
    private enrutador: Router,
    private rutaActiva: ActivatedRoute) { }





    ngOnInit(): void {
      var numDoc = this.rutaActiva.snapshot.params["numdoc"];
      var tDoc = this.rutaActiva.snapshot.params["tdoc"];
      console.log(numDoc,tDoc);
      if(numDoc && tDoc){
        this.consultaPacienteDoc(tDoc,numDoc);
        //this.consultarCitas();
  
      }
  
    }
  
    consultaPaciente(){
      this.consultaPacienteDoc(this.pacienteForm.tipo_documento,this.pacienteForm.numero_documento);
    }
  
    consultaPacienteDoc(tDoc:any,numDoc:any){ 
      
      this.pacienteService.getByDoc(tDoc,numDoc)
      .subscribe(
        data => {
          this.dataPaciente = data[0];
          this.pacienteEncontrado=true;
        },
        err => {
  
        }
        );
    }

    Crear(): void{
       
    this.citaForm.id_paciente=this.dataPaciente.id_paciente;  
    console.log(JSON.stringify(this.citaForm));
    console.log(this.citaForm);
    this.agendaService.create(this.citaForm)
    .subscribe(
        response => {
        console.log(response);
        alert(response.message);
        this.enrutador.navigate(['/']);
        //this.enrutador.navigate(['/consultapaciente',this.registroForm.numero_documento,this.registroForm.tipo_documento]);
        },
        error => {
        console.log(error);
        });
        
  }

  DirigiraRegistrar(): void{
    this.enrutador.navigate(['/registro']);

  }


  /* consultaDoctor(){
    
    this.doctorService.getAll()
    .subscribe(
      data => {
        this.dataDoctor = data;
        console.log(this.dataDoctor);
        if(this.dataDoctor){
          this.doctorEncontrado =true;
        }
      }
    )} */
  










}
