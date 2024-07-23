import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
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
      Last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ])
      )
    })
  }

  ngOnInit() {
  }

 
}
