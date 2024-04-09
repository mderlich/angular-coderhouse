import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {



  myFormModel = {
    name: '',
    email: '',
    password: '',
  }

  /* requiere importar NgForm */
  onSubmit(ngForm: NgForm): void {
    console.log(ngForm);
    if (ngForm.valid) {

      Swal.fire({
        icon: 'success',
        title: 'Realizado',
      })

      console.log(ngForm.form.value)
      
    }else{
      /* marcamos los campos requeridos */
      ngForm.form.markAllAsTouched();

      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
      })

    }
  }

}
