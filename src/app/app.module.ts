import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { LibroService } from './services/libro.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InformacionLibrosComponent } from './informacion-libros/informacion-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NoEncontradoComponent,
    HeaderComponent,
    FooterComponent,
    InformacionLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
