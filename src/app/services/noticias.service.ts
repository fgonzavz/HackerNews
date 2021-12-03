import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../interface/noticia';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  noticias: Noticia[] = [];
  pageActual: number = 0;

  constructor(private http: HttpClient) {
    this.obtenerNoticias();
  }

  private obtenerNoticias() {
    this.http
      .get(
        'https://hn.algolia.com/api/v1/search_by_date?query&hitsPerPage=1000'
      )
      .subscribe((resp: any) => {
        this.noticias = resp.hits;
      });
  }

  buscarNoticias(verSeleccion: string): Observable<any> {
    const urlBusqueda = `https://hn.algolia.com/api/v1/search_by_date?query=${verSeleccion}&hitsPerPage=1000`;
    return this.http.get<any>(urlBusqueda);
  }
}
