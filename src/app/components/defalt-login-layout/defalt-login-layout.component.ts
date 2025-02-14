import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-defalt-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './defalt-login-layout.component.html',
  styleUrl: './defalt-login-layout.component.scss'
})
export class DefaltLoginLayoutComponent {
  @Input() titulo: string = "";
  @Input() textoBotaoPrimario: string = "";
  @Input() textoBotaoSegundario: string = "";

  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
