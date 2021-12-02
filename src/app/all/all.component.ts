import { Component, OnInit } from '@angular/core';
import { Noticia } from '../interface/noticia';

import { LocalStorageService } from '../services/localStorage.service';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  mostar: Boolean = true;
  favs: Noticia[] = [];
  mostarFaves: Boolean = false;

  constructor(
    public noticiasService: NoticiasService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.favs = this.localStorage.getAllItems();
  }

  corazon(item: any) {
    this.localStorage.addFavorite(item);
    this.favs = this.localStorage.getAllItems();
  }

  eliminarElemento(item: any) {
    this.localStorage.removeFavorite(item);
    this.favs = this.localStorage.getAllItems();
  }

  MostrarAll() {
    if (!this.mostar) {
      this.mostar = true;
    } else {
      this.mostar = false;
    }
  }

  MostrarMyFaves() {
    if (this.mostarFaves) {
      this.mostarFaves = false;
    } else {
      this.mostarFaves = true;
    }
  }
}
