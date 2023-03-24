import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';//para requisição

import { Receita } from '../Receitas';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private apiUrl='http://localhost:3000/receitas';

  constructor(private http:HttpClient) { }

  getAll():Observable<Receita[]>{
    return this.http.get<Receita[]>(this.apiUrl);
  }

  getItem(id:number):Observable<Receita>{
    return this.http.get<Receita>(`${this.apiUrl}/${id}`)
  }
}
