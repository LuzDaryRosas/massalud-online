import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from '../services/agenda.service';
import { DoctorService} from '../services/doctor.service';

@Component({
  selector: 'app-consultadoctor',
  templateUrl: './consultadoctor.component.html',
  styleUrls: ['./consultadoctor.component.css']
})
export class ConsultadoctorComponent implements OnInit {
  doctorForm = {
    correo_e: "", 
    clave: "",
   
  }
  dataDoctor:any;
  dataCita:any;
  doctorEncontrado = false;
  constructor 
    (private doctorService: DoctorService, private agendaService: AgendaService, private enrutador: Router) {}

  ngOnInit(): void {
  }

// aqui empece a insertar codigo base

consultaDoctor(){
  var hoy = (new Date(Date.now())).toLocaleDateString().split('/').reverse().join('-');;
  this.doctorService.getByCorreo(this.doctorForm.correo_e)
  .subscribe(
    data => {
      this.dataDoctor = data[0];
      if(this.dataDoctor){
       
        if(this.dataDoctor.clave===this.doctorForm.clave){
        this.doctorEncontrado =true;
        console.log(this.dataDoctor.id);
        this.agendaService.getByDoctorFecha(this.dataDoctor.id,hoy)
        .subscribe(
          data => {
            this.dataCita=data;
            console.log(data); 
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
    },
    err => {

    }
    );
}

// aqui adicione
/* consultaDoctorEspecialidad(){
  this.doctorService.getDoctorEspecialidad()
  .subscribe(
    data => {
      this.dataDoctor=data;
      console.log(data); 
    }, 
    err => {
      console.log(err);
    }
  )

} */




list(){
  this.doctorService.getAll()
  .subscribe(
    (data: any) =>{
    this.dataDoctor = data;
    },
    (err: any) => {
        console.log("Error: ", err);
    });

    
}






}
