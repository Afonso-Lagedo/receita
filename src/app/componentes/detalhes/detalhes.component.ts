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
  ingredientesSelecionados: boolean[] = [];
  passosSelecionados: boolean[] = [];

  constructor(private receitasService:ReceitasService, private route:ActivatedRoute){
    this.getReceita();
  }

  onCheckboxClick() {
    setTimeout(() => {
      const allIngredientesSelected = this.ingredientesSelecionados.every(selected => selected !== false);
      const allPassosSelected = this.passosSelecionados.every(selected => selected !== false);
      const allSelected = allIngredientesSelected && allPassosSelected;

      const button = document.querySelector('button');
      if (button) {
        button.disabled = !allSelected;
        if (allSelected) {
          button.classList.remove('btnLaranja');
          button.classList.add('btnVerde');
        } else {
          button.classList.remove('btnVerde');
          button.classList.add('btnLaranja');
        }
      }
    }, 50);
  }
  

  getReceita(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.receitasService.getItem(id).subscribe((y)=> {
      this.receita=y;
      this.ingredientesSelecionados = new Array(y.ingredientes.length).fill(false);
      this.passosSelecionados = new Array(y.passos.length).fill(false);
    });
  }
}