import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-portfolio-entry',
  template: `
    <div class="portfolio-container">
      <nav class="portfolio-nav">
        <a routerLink="/portfolio" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/portfolio/about-me" routerLinkActive="active">About Me</a>
      </nav>
      <div class="portfolio-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .portfolio-container {
      padding: 1rem;
      background-color: var(--vscode-background, #1e1e1e);
    }
    .portfolio-nav {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      padding: 1rem;
    }
    .portfolio-content {
      margin-top: 1rem;
    }
  `]
})
export class RemoteEntry {}

