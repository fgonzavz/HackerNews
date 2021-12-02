import { Component, OnInit } from '@angular/core';
import { Noticia } from '../interface/noticia';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  lenguaje:string = '';
  verSeleccion: string= '';
  noticias:Noticia[] = [];

  constructor(public noticiasService: NoticiasService) { }

  ngOnInit(): void {
  }

  buscar(){

    this.verSeleccion = this.lenguaje;

    console.log(this.verSeleccion);

    this.noticiasService.buscarNoticias(this.verSeleccion).subscribe(resp =>{
      console.log(resp);

    });

  }

}
