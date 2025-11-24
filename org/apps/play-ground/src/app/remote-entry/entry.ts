import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-play-ground-entry',
  template: `
    <div class="playground-container">
      <nav class="playground-nav">
        <a routerLink="/playground" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/playground/json-forms" routerLinkActive="active">JSON Forms</a>
      </nav>
      <div class="playground-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .playground-container {
      padding: 1rem;
      background-color: var(--vscode-background, #1e1e1e);
    }
    .playground-nav {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      padding: 1rem;
    }
    .playground-content {
      margin-top: 1rem;
    }
  `]
})
export class RemoteEntry {}
