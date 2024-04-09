import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';




/* ************************************************************* */
/* VerificarCaracteresValidos */
export function VerificarCaracteresValidos(c: AbstractControl) {

  // Retorna null si el valor es null
  if (c.value == null) return null

  // Verificar si la cadena contiene solo letras y espacios
  // !importante la negacion, todo lo que no sea eso, no se admite
  if (!/^[a-z ]*$/i.test(c.value)) { 

      return {
        VerificarCaracteresValidos: true
      }
      
  }

  return null

}


/* ************************************************************* */
/* VerificarCoincidencias */
export function VerificarCoincidencias(params: any[]): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    // Aplicar el validador 'required' para asegurarse de que se seleccione una opción
    const requiredError = Validators.required(control);
    if (requiredError != null) {
      return requiredError; // Devolver el error 'required' si no se selecciona ninguna opción
    }

    // Verificar si el valor del control coincide con alguno de los parámetros
    const value = control.value;
    const match = params.some(param => param === value);

    // Devolver un error personalizado si no hay coincidencias
    return match ? null : { VerificarCoincidencias: true };
    
  };
  

}


/* ************************************************************* */
/* VerificarArchivo */


export function VerificarArchivo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value as File;

    if (!file) {
      return { archivoNoSeleccionado: true }; // Retorna un error si no se seleccionó ningún archivo
    }

    return null; // Retorna null si se seleccionó un archivo
  };
}

