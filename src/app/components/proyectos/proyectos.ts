import { Component, OnInit, signal } from '@angular/core';
import { Github, RepoGithub } from '../../services/github';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos implements OnInit {
  proyectos = signal<RepoGithub[]>([]);
  cargando = signal(true);
  error = signal(false);

  constructor(private githubService: Github) {}

  ngOnInit(): void {
    this.githubService.obtenerRepos().subscribe({
      next: (repos) => {
        this.proyectos.set(repos);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al obtener repos:', err);
        this.error.set(true);
        this.cargando.set(false);
      },
    });
  }
}