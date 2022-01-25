
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService {
    private baseUrl: string = environment.baseUrl;
    private estado:boolean = false;

  constructor(private http: HttpClient, private cookies: CookieService, private router: Router) {}

  login(user: any): Observable<any> {
    const url= `${this.baseUrl}/auth/login`;
    // Para esto tenemos que levatar el proyecto de fake-api haciendo npm run start-auth
    return this.http.post("http://localhost:8000/auth/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:8000/auth/register", user);
  }

  setToken(token: string) {
    return localStorage.setItem("token", token);
  }
  getToken() {
    return JSON.parse(<string>localStorage.getItem("token"));
  }

  comprobarToken(){
    if(this.getToken() != null){
      let token:any = this.getToken();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access_token}`
      })
      const cabecera = {
        headers: headers
      }
      const url = `${this.baseUrl}/comprobarToken`;
      this.http.get(url,cabecera).subscribe(data =>{
        this.estado = true;
        this.router.navigateByUrl('/servers');
      }, error => {
        this.estado = false;
      });
      return this.estado;
    }else{
      this.router.navigate(['']);
      return this.estado;
    }
  }


  //##########Otros intentos que no han funcionado, pero me interesa tenerlos 

  // comprobarToken(email:string,password:string){
  //   const url = `${this.baseUrl}/auth/login`;
  //   const body = {
  //     'email': email,
  //     'password': password
  //   }
  //   return this.http.post<any>(url, body);
  // }


//   comprobarToken():boolean{
//     let token:any="";
//     let tokenParseado:any="";
//     token = localStorage.getItem('token');
//     // tokenParseado= JSON.parse(token);
//      tokenParseado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE2NDMxMzYzMDcsImV4cCI6MTY0MzEzNjM2N30.hJo2uqb5QkdkE0LnVhW8pNupaCZPHbb2rDq93A00qhI';
//     let respuesta = 0;
//     // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE2NDMxMjcxOTcsImV4cCI6MTY0MzEyNzI1N30.XY3jMt-_mA5hyR7GZ9oHVLPP89h5swl8Kszlrk41S5s';
//     // const headers = new HttpHeaders({'Authorization': 'Bearer ' + token})
//     // const respuesta = false;
//     const url = `${this.baseUrl}/comprobarToken`
//     this.http.get(url, { headers: new HttpHeaders({'Authorization': 'Bearer ' + tokenParseado})}).subscribe( data => {
//      console.log(data)
//      if(Object.values(data)[0] == true){
//       console.log("entra puta")
//       respuesta = 1;
//       console.log("deberia estar cambiado")
//   }
//  })
//  if(respuesta == 1){
//    return true;
//  }
//  else{
//    return false;
//  }
//   }

  // comprobarToken():any{
        
  //   let token:any="";
  //   let tokenParseado:any="";
  //   token = localStorage.getItem('token');
  //   tokenParseado= JSON.parse(token);
   
  //   let respuesta = 0;
  //   const url = `${this.baseUrl}/comprobarToken`

  //   console.log(this.http.get(url, { headers: new HttpHeaders({'Authorization': 'Bearer ' + tokenParseado})}))
  //   this.http.get(url, { headers: new HttpHeaders({'Authorization': 'Bearer ' + tokenParseado})}).subscribe( data => {
     
  //       //No consigo sacar data.estado si no lo hago de esta forma.
  //       Object.values(data)[0]

  //    if(Object.values(data)[0] == true){
  //        console.log("entra puta")
  //        respuesta = 1;
  //        console.log("deberia estar cambiado")
  //    }
  //   })
  //   if(respuesta == 1){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  //   // console.log("la respuesta es "+respuesta)
  //   // return respuesta;
  // }
  // comprobarToken(){
  //   let token = JSON.parse(<string>localStorage.getItem('token'))
  //   .access_token;
    
    
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   const options = {
  //     headers: headers
  //   }
  //   let url = `${this.baseUrl}/products`;
  //   this.http.get(url)
  //   .subscribe(resp => console.log(resp))

    
  // }

//   comprobarToken(): Observable<any>{
//     const url = `${this.baseUrl}/comprobarToken`
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE2NDMxMjc3MDIsImV4cCI6MTY0MzEyNzc2Mn0.1hRYiDllI2s0OVwLz46AE0iEADG0Yq8Vw4sHtd_JVlo';
//     console.log(this.http.get(url, { headers: new HttpHeaders({'Authorization': 'Bearer ' + token})}));
//     return this.http.get(url, { headers: new HttpHeaders({'Authorization': 'Bearer ' + token})});
// }

  // getUser() {
  //   return this.http.get("https://reqres.in/api/users/2");
  // }
  // getUserLogged() {
  //   const token = this.getToken();
  //   // Aquí iría el endpoint para devolver el usuario para un token
  // }
}