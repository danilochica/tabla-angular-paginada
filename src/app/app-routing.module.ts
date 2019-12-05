import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { InformacionLibrosComponent } from './informacion-libros/informacion-libros.component';

const routes: Routes = [
  {path: '', component: InformacionLibrosComponent},
  { path: '**', component: NoEncontradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
