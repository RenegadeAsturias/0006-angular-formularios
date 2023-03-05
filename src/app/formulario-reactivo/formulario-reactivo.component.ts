import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  formulario:FormGroup;

  constructor( private fb: FormBuilder ) { 
    this.formulario = this.fb.group({ });
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      name: [ "René", 
              [Validators.required, Validators.minLength(3), Validators.maxLength(8)]
            ],
      email: ["", Validators.required],
    });
  }

  onSubmit(_datos:any){
    console.log(_datos.value);
  }

}
