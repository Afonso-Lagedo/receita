import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReceitasComponent } from './componentes/receitas/receitas.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReceitasComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
