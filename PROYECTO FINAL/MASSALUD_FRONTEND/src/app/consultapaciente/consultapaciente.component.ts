import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../services/agenda.service';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-consultapaciente',
  templateUrl: './consultapaciente.component.html',
  styleUrls: ['./consultapaciente.component.css']
})
export class ConsultapacienteComponent implements OnInit {
  pacienteForm = {
    tipo_documento: "", 
    numero_documento: "",
  }
  dataPaciente:any ={};
  dataCita:any;
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
        this.consultarCitas();
      },
      err => {

      }
      );
  }
  consultarCitas(){
    var hoy = (new Date(Date.now())).toLocaleDateString().split('/').reverse().join('-');;
    if(this.dataPaciente){
      this.pacienteEncontrado =true;
      this.agendaService.getByPacienteFecha(this.dataPaciente.id,hoy)
      .subscribe(
        data => {
          this.dataCita=data;
          console.log(data); //getByPacienteFecha
        }, 
        err => {
          console.log(err);
        }
      )
    }else{
      alert("Datos Erroneos");
      //clearForms();
    }
  }

  Delete(id:any, i: any): void{
    //alert(JSON.stringify(this.registroForm));
    //console.log(JSON.stringify(this.registroForm));

    
    this.agendaService.delete(id) //[cita1,cita2].id
    .subscribe(
        response => {
        console.log(response);
        alert(response.message);
        this.dataCita.splice(i,1);
        //this.enrutador.navigate(['/']);
        },
        error => {
        console.log(error);
        });
        
  }
 





}
