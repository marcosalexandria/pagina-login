import { Component } from '@angular/core';
import { DefaltLoginLayoutComponent } from "../../components/defalt-login-layout/defalt-login-layout.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPrimarioComponent } from '../../components/input-primario/input-primario.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaltLoginLayoutComponent, ReactiveFormsModule, InputPrimarioComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
}
