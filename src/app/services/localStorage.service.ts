import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Noticia } from '../interface/noticia';
import { Observable } from 'rxjs';

const MY_FAVES: any = 'My Faves';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private noticiasSubject = new BehaviorSubject<Noticia[] | null>(null);
  noticias$ = this.noticiasSubject.asObservable();

  constructor() {}

  getFavoritesNoticias(): any {
    try {
      const noticias = JSON.parse(localStorage.getItem('MY_FAVES')!);

      return noticias;
    } catch (error) {
      console.log('error getting favorites from local storage', error);
    }
  }

  addFavorite(item: any) {
    const items = this.getAllItems();
    items.push(item);
    localStorage.setItem('favorites', JSON.stringify(items));
  }

  getAllItems() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  removeFavorite(item: any) {
    let items = JSON.parse(localStorage.getItem('favorites') || '[]');
    console.log(item);
    let elementoEliminado = items.findIndex((element: any) => {
      return element.created_at_i === item.created_at_i;
    });
    items.splice(elementoEliminado, 1);
    localStorage.setItem('favorites', JSON.stringify(items));
    this.getAllItems();
  }
}
