import { HttpClient, HttpParams } from '@angular/common/http';
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

  get httpParams () {
    return new HttpParams()
    .set('fields','name,capital,alpha2Code,flag,population');
  }

  buscarPais(termino:string): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${termino}`;
    // en vez de hacer subcribe, retornamos el objeto observable
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino:string): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${termino}`;
    // en vez de hacer subcribe, retornamos el objeto observable
    return this.http.get<Country[]>(url,  {params: this.httpParams});
  }

  buscarRegion(termino:string): Observable<Country[]> {

     const url = `${ this.apiUrl }/regionalbloc/${termino}`;
    // en vez de hacer subcribe, retornamos el objeto observable
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarPaisPorCodigo(termino:string): Observable<Country> {

    const url = `${ this.apiUrl }/alpha/${termino}`;
    // en vez de hacer subcribe, retornamos el objeto observable
    return this.http.get<Country>(url);
  }

}
