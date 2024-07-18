import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
loginForm: FormGroup;
validation_messages = {
  email: [
    {type:"required", message: "El email es obligatorio"},
    {type: "email", message: "Email invalido"}
  ],
  password: [
    {type: "required", message: "La contraseña es obligatoria"},
  ]
}
  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    });
  }

  ngOnInit() {
  }

  loginUser(dataLogin: any){
  console.log(dataLogin)    
  }
}
