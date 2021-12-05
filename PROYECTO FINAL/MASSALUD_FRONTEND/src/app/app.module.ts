import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { ConsultadoctorComponent } from './consultadoctor/consultadoctor.component';
import { ConsultapacienteComponent } from './consultapaciente/consultapaciente.component';
import { LogindoctorComponent } from './logindoctor/logindoctor.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { IngresarComponent } from './ingresar/ingresar.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    RegistroComponent,
    ConsultadoctorComponent,
    ConsultapacienteComponent,
    LogindoctorComponent,
    CalendarioComponent,
    IngresarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
