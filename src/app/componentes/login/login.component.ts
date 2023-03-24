import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login!:string;
  senha!:string;
  erro:boolean=false;

  constructor(private router: Router) {}

  validaLogin(login:string, senha:string){
    if(login==='Afonso' && senha==='123'){
      this.erro=false;
      this.router.navigate(['/receitas']);
    }
    else{
      this.erro=true;
    }
  }
}
