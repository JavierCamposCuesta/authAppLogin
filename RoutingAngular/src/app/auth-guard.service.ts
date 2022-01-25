import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";
import { LoginService } from "./login/login.service";
 
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router, private loginService: LoginService, private http:HttpClient) { }
  private baseUrl: string = environment.baseUrl;
  private estado:boolean = false;
  
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any{
 
      return this.loginService.comprobarToken();
 
}
canActivateChild(route: ActivatedRouteSnapshot, 

  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

return this.canActivate(route, state);
}
}