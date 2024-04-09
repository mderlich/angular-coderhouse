import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerificarCaracteresValidos, VerificarCoincidencias, VerificarArchivo } from '../../utils/validators';




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
  
  en otros form pueden llamarse...
  userFormGroup: FormGroup;
  f: FormGroup;

  formBuilder: FormBuilder
  fb: FormBuilder
  */

  /* ***************************** */
  /* FormGroup */
  userFormGroup: FormGroup;

  minLength: number = 3;
  maxLength: number = 20;

  nivelEducacionOptions = ['primario','secundario','terciario','universitario','posgrado']; 

  aplicarParaOptions = ['postulacion-general','developer']; 

  cargaCVOptions = 100; // 1 MB = 1.048.576 bytes = 1024 * 1024

  constructor(private fb: FormBuilder) {
    this.userFormGroup = fb.group({

      apellido: ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
        VerificarCaracteresValidos
      ])],

      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
        VerificarCaracteresValidos
      ])],      

      email: ['', Validators.compose([
        //Validators.email, 
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"),
        
      ])],

      numeroTelefono: ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
        Validators.pattern("[0-9 -]+"),
      ])],        

      ciudad: ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
        VerificarCaracteresValidos, // funcion externa personalizada
      ])],   

      provincia: ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
        VerificarCaracteresValidos, // funcion externa personalizada
      ])],   

      pais: ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
        VerificarCaracteresValidos, // funcion externa personalizada
      ])],   

  
      nivelEducacion: ['', Validators.compose([
        Validators.required,
        /* Las opciones aceptadas estan indicados arriba, si no coinciden muestra error */
        VerificarCoincidencias(this.nivelEducacionOptions), // funcion externa personalizada
      ])],  

      aplicarPara: ['', Validators.compose([
        Validators.required,
        /* Las opciones aceptadas estan indicados arriba, si no coinciden muestra error */
        VerificarCoincidencias(this.aplicarParaOptions), // funcion externa personalizada
      ])], 

      cargaCV: ['', Validators.compose([
        Validators.required,
        //VerificarArchivo(this.cargaCVOptions), // funcion externa personalizada
        
      ])], 

      

    })
  }


  /* ***************************** */


  
  getValidationClass(controlName: string): string {
    const control = this.userFormGroup.get(controlName);
    return control && control.touched ? (control.valid ? 'is-valid' : 'is-invalid') : '';
  }



  hasError(controlName: string, errorType: string): boolean {
    const control = this.userFormGroup.get(controlName);
    return !!control && control.hasError(errorType);
  }
  
  

  enviarRF(){
    console.log(this.userFormGroup)       // objeto
    console.log(this.userFormGroup.value) // valores

    this.userFormGroup.reset();

  }











}
