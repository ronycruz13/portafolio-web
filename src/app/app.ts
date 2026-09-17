import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { SobreMi } from './components/sobre-mi/sobre-mi';
import { Habilidades } from './components/habilidades/habilidades';
import { Proyectos } from './components/proyectos/proyectos';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';





@Component({
  imports: [RouterOutlet, Navbar, Header, SobreMi, Habilidades, Proyectos, Contacto, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portafolio-web');
}
