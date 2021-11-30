import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../interface/noticia';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  noticias: Noticia[] = [];
  lenguaje: string = "";
  constructor(private http: HttpClient) { this.obtenerNoticias(); }

  private obtenerNoticias() {
    this.http.get('https://hn.algolia.com/api/v1/search_by_date?query&hitsPerPage=1000').subscribe((resp: any) => {
      
     this.noticias = resp.hits;
     console.log(this.noticias);

    });
}
}
