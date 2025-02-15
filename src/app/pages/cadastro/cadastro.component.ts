import { Component } from '@angular/core';
import { DefaltLoginLayoutComponent } from "../../components/defalt-login-layout/defalt-login-layout.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPrimarioComponent } from '../../components/input-primario/input-primario.component';
import { Route, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface cadastroForm{
  nome: FormControl,
  email: FormControl,
  password: FormControl,
  confirmaPassword: FormControl

}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [DefaltLoginLayoutComponent, ReactiveFormsModule, InputPrimarioComponent],
  providers: [
    LoginService
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroForm!: FormGroup<cadastroForm>;

  constructor(private router: Router, private loginService: LoginService, private toastService: ToastrService){

    this.cadastroForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmaPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

  entrar(){
    this.loginService.entrar(this.cadastroForm.value.email, this.cadastroForm.value.password).subscribe({
      next: () => this.toastService.success("login feito com sucesso!"),
      error: () => this.toastService.error("Erro, tente novamente mais tarde!")
    })
  }

  navegaParaCadastro(){
    this.router.navigate(["login"]) //inda nao criei a rota
  }
}
