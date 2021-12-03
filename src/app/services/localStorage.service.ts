import { Injectable } from '@angular/core';


const MY_FAVES: any = 'My Faves';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
 

  constructor() {}



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
