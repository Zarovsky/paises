import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  // endpoint
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino:string): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }}`;
    // en vez de hacer subcribe, retornamos el objeto observable
    return this.http.get<Country[]>(url);
  }


}
