import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages = {
    name: [
      { type: 'required', message: 'El nombre es obligatorio' },
      { type: 'pattern', message: 'El nombre solo puede contener letras y espacios' }
    ],
    last_name: [
      { type: 'required', message: 'El apellido es obligatorio' },
      { type: 'pattern', message: 'El apellido solo puede contener letras y espacios' }
    ],
    email: [
      { type: 'required', message: 'El email es obligatorio' },
      { type: 'email', message: 'Email inválido' }
    ],
    password: [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthenticateService
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ])
      )
    });
  }

  ngOnInit() {}

  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }
  
  register(registerData: any){
    console.log(registerData);
    this.authService.registerUser(registerData).then(res => {
      this.navCtrl.navigateBack("/login");
    });
  }

}
