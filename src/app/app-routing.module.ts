import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { ReceitasComponent } from './componentes/receitas/receitas.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'receitas', component: ReceitasComponent},
    {path: 'receitas/:id', component: DetalhesComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }