import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Register } from 'src/app/models/register.model';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormValidators } from './form-validator';
import { ConfigStore } from 'src/app/app-config/config-store'
import { delay, first, lastValueFrom, timeout } from 'rxjs';
import { AlertService } from 'src/app/services/app-services/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
  public register: Register;
  public formGroup : FormGroup = this.formBuilder.group 
  ({
    email: new FormControl('', [
    Validators.required, 
    Validators.minLength(5), 
    Validators.email
  ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6) 
    ]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    description: new FormControl(''), 
  },
  { validators: [
    FormValidators.mustMatch('password', 'confirmPassword')
  ], }) ;

  public form: ElementRef;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private configStore: ConfigStore,
    private alertService : AlertService
  ) {}
    isActive(url: string) : boolean {
      return this.router.isActive(url, true);
    }

  async registerUser() {
    if(!this.validateForm())
    {
      return;
    }
    console.log(JSON.stringify(this.formGroup.value));
    this.configStore.startLoadingPanel();
    let registerUser: Register = this.formGroup.value;
    await lastValueFrom(this.authService.signup(registerUser).pipe(timeout(2000))).then(() => {
      this.configStore.stopLoadingPanel();
      this.alertService.showSuccess("Rejestracja przebiegła pomyslnie!")
      
    }).catch((error) => {
      console.log(error.message)
      this.configStore.stopLoadingPanel();
      this.alertService.showError(error.message)
    
    });
    
    //this.router.navigate(['./success'],{relativeTo: this.route})
    this.router.navigate(['./'])
   
    /* setTimeout(() => {
      this.configStore.stopLoadingPanel();
  }, 1000); */
  }

  validateForm(): boolean {
    let form = document.querySelector('form') as HTMLFormElement;
    let inputs = form.getElementsByTagName('input');
    let isOk = true;
    const password = this.formGroup.get('password').value;
    const confirmPassword = this.formGroup.get('confirmPassword').value;

    for(let i = 0; i < inputs.length; i++)
    {
      inputs.item(i)?.dispatchEvent(new FocusEvent('focusout')); //wysyła zdarzenie do wykonania na elemencie
      if(inputs.item(i)?.className.includes('invalid'))
      {
        return isOk = false;
      }
    }
    console.log('tak')
    return isOk = true;
    }


  ngOnInit(): void {}

}
