import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient ) { }

  entrar(email: string, password: string){
    //                              retorna       URL       Corpo
    return this.httpClient.post<LoginResponse>("/login", {email, password}).pipe(
      tap((value) => {
        //pega o valor do token e nome e coloca na sessionStorage
        sessionStorage.setItem("auth-token", value.token);
        sessionStorage.setItem("nomeUsuario", value.nome);
      }
    ));

  }
}
