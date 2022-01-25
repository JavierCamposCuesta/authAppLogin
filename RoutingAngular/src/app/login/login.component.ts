import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from './login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor( public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    const user = {email: this.email, password: this.password};
    this.loginService.login(user)
    .subscribe( data => {
      console.log(data)
      localStorage.setItem('token',JSON.stringify(data));
      this.router.navigateByUrl('/servers');
      
    }, error => {
      Swal.fire({
        title: 'Error al inciar sesión',
        text: 'Datos incorrectos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    )
  }

}
