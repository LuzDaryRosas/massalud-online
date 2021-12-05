import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../services/paciente.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

//ACTUALIZAR
export class RegistroComponent implements OnInit {
  registroForm = {
    nombres: "",
    apellidos: "",
    numero_documento: "",
    tipo_documento:"",
    fecha_nacimiento: "", //String Date input type="date"
    numero_celular: 0,
    correo_electronico: ""
    
  }
  submitted = false;
  constructor(private pacienteService: PacienteService, private enrutador: Router) { }

  ngOnInit(): void {
  }

  Envio(): void{
    //alert(JSON.stringify(this.registroForm));
    console.log(JSON.stringify(this.registroForm));

    
    this.pacienteService.create(this.registroForm)
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
  

}





