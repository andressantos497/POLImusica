import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credentials: any){
    return new Promise((accept, reject)=>{
      if (
        credentials.email=="andres@gmail.com" && credentials.password=="123456"
      ){
        accept("Login Correcto")
      }else{
        reject("Login Incorrecto")
      }
    })
  }
}
