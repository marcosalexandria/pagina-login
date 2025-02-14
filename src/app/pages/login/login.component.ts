import { Component } from '@angular/core';
import { DefaltLoginLayoutComponent } from "../../components/defalt-login-layout/defalt-login-layout.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPrimarioComponent } from '../../components/input-primario/input-primario.component';
import { Route, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaltLoginLayoutComponent, ReactiveFormsModule, InputPrimarioComponent],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private router: Router, private loginService: LoginService){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  entrar(){
    this.loginService.entrar(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => console.log("sucesso"),
      error: () => console.log("error")
    })
  }

  navegaParaCadastro(){
    this.router.navigate(["cadastrar"]) //inda nao criei a rota
  }
}
