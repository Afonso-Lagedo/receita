import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Receita } from 'src/app/Receitas';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {
  receita?:Receita;

  constructor(private receitasService:ReceitasService, private route:ActivatedRoute){
    this.getReceita()
  }

  getReceita(){
    const id = Number(this.route.snapshot.paramMap.get("id"));//extrair id
    this.receitasService.getItem(id).subscribe((y)=> (this.receita=y));
  }
}
