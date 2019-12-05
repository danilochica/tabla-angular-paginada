import { Component, OnInit } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { Libros } from './libros.modelo';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaLibros: Libros[] = [];
  pageActual = 1;

  constructor(private librosService: LibroService) { }

  ngOnInit() {
    this.librosService.obtenerLibros().subscribe(
      listaLibros => this.listaLibros = listaLibros
    );
  }

  getCantidadLibrosCompletados(): number {
    const cantidad = this.listaLibros.filter(libros => libros.completed === true);
    return cantidad.length;
  }

  getCantidadLibrosPendientes(): number {
    const cantidad = this.listaLibros.filter(libros => libros.completed === false);
    return cantidad.length;
  }

}
