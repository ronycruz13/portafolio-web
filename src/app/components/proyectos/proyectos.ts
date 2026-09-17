import { Component, OnInit } from '@angular/core';
import { Github, RepoGithub } from '../../services/github';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos implements OnInit {
  proyectos: RepoGithub[] = [];
  cargando = true;
  error = false;

  constructor(private githubService: Github) {}

  ngOnInit(): void {
    this.githubService.obtenerRepos().subscribe({
      next: (repos) => {
        this.proyectos = repos;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener repos:', err);
        this.error = true;
        this.cargando = false;
      },
    });
  }
}

