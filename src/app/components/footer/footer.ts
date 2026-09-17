import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  anioActual = signal(new Date().getFullYear());
// new Date().getFullYear() obtiene el año actual del sistema (ej: 2026).
// Al guardarlo en una signal, queda disponible para usarlo en la plantilla
// con {{ anioActual() }} — nota los paréntesis: las signals son funciones,
//  así que para leer su valor se "invocan".


}