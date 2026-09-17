import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RepoGithub {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

@Injectable({
  providedIn: 'root',
})
export class Github {
  private apiUrl = 'https://api.github.com/users/ronycruz13/repos';

  constructor(private http: HttpClient) {}

  obtenerRepos(): Observable<RepoGithub[]> {
    return this.http.get<RepoGithub[]>(this.apiUrl);
  }
}