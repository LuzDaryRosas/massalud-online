import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { LogindoctorComponent } from './logindoctor/logindoctor.component';
import { ConsultapacienteComponent } from './consultapaciente/consultapaciente.component';
import { ConsultadoctorComponent } from './consultadoctor/consultadoctor.component';
import { CalendarioComponent } from './calendario/calendario.component';
// import { Component } from './consultapaciente/consultapaciente.component';

const routes: Routes =[
  {path:"", component: InicioComponent},
  {path:"registro", component: RegistroComponent},
  {path:"menu", component: MenuComponent},
  {path:"logindoctor", component: ConsultadoctorComponent},
  {path:"consultapaciente", component: ConsultapacienteComponent},
  {path:"consultapaciente/:numdoc/:tdoc", component: ConsultapacienteComponent},
  {path:"consultadoctor", component: ConsultadoctorComponent},
  {path:"calendario", component: CalendarioComponent},
  {path:"ingresar", component: MenuComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
