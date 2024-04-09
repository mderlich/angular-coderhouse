import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/* NO HOMERO */
export const noHomeroValidator: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    console.log(control);
    if (typeof control.value === 'string' && control.value.toLowerCase().includes('homero')) {
        return {
            noHomero: true,
        }
    }
    return null;
}