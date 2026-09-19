import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Inicio } from './components/inicio/inicio';
import { SobreMi } from './components/sobre-mi/sobre-mi';
import { Habilidades } from './components/habilidades/habilidades';
import { Proyectos } from './components/proyectos/proyectos';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Inicio, SobreMi, Habilidades, Proyectos, Contacto, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portafolio-web');
}
