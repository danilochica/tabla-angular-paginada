import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libros } from '../lista/libros.modelo';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private urlGet: 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  obtenerLibros(): Observable<Libros[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
      map((response) => response as Libros[])
    );
  }

}
