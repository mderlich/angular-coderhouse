import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {


  /*   
  Entidades que manipulan los formularios de Angular
  -------------------------------------------------
  FormGroup   - Agrupar otros controles y definir un objeto
  FormControl - Manipula el valor de los campos (inputs, selects, chechboxs, textarea)
  FormArray   - Manejar arrays de otros controles
   */


  /* formGroup */
  myForm = this.formBuilder.group({
    /* formControlName */
    name: [''], /* << corchetes */
    lastName: [''],
    email: ['', [
      //Validators.email, 
      Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"),
      Validators.required
    ]],
    password: [''],
  })

  get emailControl() {
    /* notar el signo... ? */
    
    return this.myForm.get('email')?.valid;
  }


  constructor(private formBuilder: FormBuilder) {
    /* ... */
  }

  onSubmit(): void {
    //alert('usuario creado' + JSON.stringify(this.myForm.value))
  Swal.fire({
    icon: 'success',
    title: 'Realizado',
    text: 'Usuario registrado',
  })
  }

}
