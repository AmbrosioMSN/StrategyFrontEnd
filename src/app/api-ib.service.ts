import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiIBService {
  private apiUrl = 'https://strategybackend.onrender.com/'; // Substitua pelo URL do seu backend

  constructor(private http: HttpClient) {}

  search(searchTerm: string, language: string): Observable<any> {
    const params = new HttpParams()
      .set('search_term', searchTerm)
      .set('language', language);
    // Corrigido: Usar crase para interpolar variáveis na URL
    return this.http.get(`${this.apiUrl}search`, { params });
  }

  process(
    spanishDescription: boolean,
    frenchDescription: boolean,
    typeSearch: number
  ): Observable<any> {
    const params = new HttpParams()
      .set('spanishDescription', spanishDescription)
      .set('frenchDescription', frenchDescription)
      .set('typeSearch', typeSearch);
    // Corrigido: Usar crase para interpolar variáveis na URL
    return this.http.get(`${this.apiUrl}process`, { params });
  }
}
function type(spanishDescription: boolean): any {
  throw new Error('Function not implemented.');
}
