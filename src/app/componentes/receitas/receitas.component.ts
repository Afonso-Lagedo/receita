import { Component } from '@angular/core';
import { Receita } from 'src/app/Receitas';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent {
  receitas: Receita[]=[];
  filtro!:string;

  constructor(private receitaService: ReceitasService){
    this.getReceitas()
  }

  getReceitas():void{
    this.receitaService.getAll().subscribe((x) => (this.receitas=x));
  }
}
