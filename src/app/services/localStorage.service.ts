import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Noticia } from '../interface/noticia';

const MY_FAVES: any ='My Faves';
@Injectable({
  providedIn: 'root',
})

export class LocalStorageService{
    
    private noticiasSubject = new BehaviorSubject<Noticia[] | null>(null);
    noticias$ = this.noticiasSubject.asObservable();

    constructor(){
        // this.initialStorage()
    }

    getFavoritesNoticias():any{
        try {
            const noticias = JSON.parse(localStorage.getItem('MY_FAVES')!)

            return noticias;
            
        } catch (error) {
            console.log("error getting favorites from local storage", error);
        }
    }

    // private initialStorage():void{

    //     const currents = JSON.parse(localStorage.getItem(MY_FAVES)!);
    //     if (!currents) {
    //         localStorage.setItem(MY_FAVES, JSON.stringify([]))
    //     }

    //     this. getFavoritesNoticias();

    // }

    addFavorite(item:any){
        const items = this.getAllItems();
        items.push(item);
        localStorage.setItem('favorites',JSON.stringify(items));
    }

    getAllItems(){
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    }


}