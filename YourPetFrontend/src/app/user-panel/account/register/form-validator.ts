import { AbstractControl, ValidatorFn } from '@angular/forms';

export class FormValidators {
    static mustMatch(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
          const control = controls.get(controlName);
          const checkControl = controls.get(checkControlName);
          if (checkControl?.errors && !checkControl.errors['mustMatch']) {
            return null;
          }
          if (control?.value !== checkControl?.value) {
            checkControl?.setErrors({ mustMatch: true });
            return { mustMatch: true };
          } else {
            checkControl?.setErrors(null);
            return null;
          }
        };
      }
}
