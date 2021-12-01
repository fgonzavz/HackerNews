import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../interface/noticia';
import { PageEvent } from '@angular/material/paginator';
@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  noticias: Noticia[] = [];
  pageActual:number = 0;
  
 
  constructor(private http: HttpClient ) {
    this.obtenerNoticias();
  }

  private obtenerNoticias() {
    this.http
      .get(
        'https://hn.algolia.com/api/v1/search_by_date?query&hitsPerPage=1000'
      )
      .subscribe((resp: any) => {
     
        
        this.noticias = resp.hits;

        console.log(this.noticias);
      });
  }

}
