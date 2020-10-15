import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  frmRegistro: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }
  crearFormulario(){
    this.frmRegistro=this.fb.group({
      id_ter : ['',Validators.required, Validators.minLength(5)],
      nombre_tercero : ['',Validators.required, Validators.minLength(5)],
      email : ['',Validators.required, Validators.minLength(5)],
      telefono : ['',Validators.required, Validators.minLength(5)],
      token : ['',Validators.required, Validators.minLength(5)],
      id_ter_fk : ['',Validators.required, Validators.minLength(5)],
      id_tipo : ['',Validators.required, Validators.minLength(5)]

    });
    
  }
  getFormulario(){
    console.log((this.frmRegistro.value));
  }
}
