import { LoginSService } from './services/login-s.service';
import { ResponseI } from './interface/response-i';
import { LoginI } from './interface/login-i';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login : new FormControl('', Validators.required),//Esta varable recibe 2 parametros el calor pór defecto del campo y la validacion
    pwd : new FormControl('', Validators.required)

  })


  constructor(private api:LoginSService, private router:Router) { }


  ngOnInit(): void {
  }

  onLogin(form:LoginI){
      this.api.loginByUser(form).subscribe(data => {
        let dataResponse:ResponseI = data;
        
        if (dataResponse.estatus == true) {
            localStorage.setItem("token", dataResponse.api_token);
            this.router.navigate(['auth/home']);
        
          }
      })
  }

}
