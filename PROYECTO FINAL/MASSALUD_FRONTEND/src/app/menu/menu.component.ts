import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('menuLinks', {static:true}) menulinks?: ElementRef;
  @ViewChild('menuBoton', {static:true}) menuBoton?: ElementRef;
  contador = 0;
  constructor() { }

  ngOnInit(): void {
  }
  menuEvent():void {
  
     
    var mc = this;
    console.log("click");
    if(mc.contador==0){
      
      mc.menulinks?.nativeElement.classList.remove("uno")
        mc.menulinks?.nativeElement.classList.add("dos"); //= ("enlaces dos")
        mc.contador=1;
    }else{
      mc.menulinks?.nativeElement.classList.remove("dos")
      mc.menulinks?.nativeElement.classList.add("uno");
        //enlaces.className = ("enlaces uno")
        mc.contador=0;
    }
  
  }

}
