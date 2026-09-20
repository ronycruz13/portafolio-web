import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { SobreMi } from './components/sobre-mi/sobre-mi';
import { Habilidades } from './components/habilidades/habilidades';
import { Proyectos } from './components/proyectos/proyectos';
import { Contacto } from './components/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'habilidades', component: Habilidades },
  { path: 'proyectos', component: Proyectos },
  { path: 'contacto', component: Contacto },
];