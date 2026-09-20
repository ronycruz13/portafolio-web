import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuAbierto = signal(false);

  toggleMenu(): void {
    this.menuAbierto.update((valor) => !valor);
  }

  cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}