import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.css']
})
export class FormularioBasicoComponent {

  onSubmit(_datos:any){
    console.log(_datos.value);
  }

}
