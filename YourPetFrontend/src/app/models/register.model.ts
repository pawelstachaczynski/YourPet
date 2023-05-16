import { ValidatorFn, AbstractControl } from "@angular/forms";

export class Register{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    city: string;
    role: number;
    phone: string;
    description: string;
}

export class CustomValidators {
    static match(controlName: string, matchControlName: string): ValidatorFn {
      return (controls: AbstractControl) => {
        const control = controls.get(controlName);
        const matchControl = controls.get(matchControlName);
  
        if (!matchControl?.errors && control?.value !== matchControl?.value) {
          matchControl?.setErrors({
            matching: {
              actualValue: matchControl?.value,
              requiredValue: control?.value
            }
          });
          return { matching: true };
        }
        return null;
      };
    }
  }