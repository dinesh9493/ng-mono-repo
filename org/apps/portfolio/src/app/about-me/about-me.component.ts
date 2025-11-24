import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="about-me-container">
      <h1>About Me</h1>
      <p>This is the About Me page in the Portfolio micro frontend.</p>
      <p>You can add your personal information, skills, experience, etc. here.</p>
      <nav>
        <a routerLink="/portfolio">Back to Portfolio</a>
      </nav>
    </div>
  `,
  styles: [`
    .about-me-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
      background-color: var(--vscode-background, #1e1e1e);
      color: var(--vscode-text, #d4d4d4);
    }
    h1 {
      color: var(--vscode-text, #d4d4d4);
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.6;
      margin-bottom: 1rem;
      color: var(--vscode-text, #d4d4d4);
    }
    nav a {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: var(--vscode-button, #0e639c);
      color: var(--vscode-button-text, #ffffff);
      text-decoration: none;
      border-radius: 2px;
      border: 1px solid var(--vscode-border, #3e3e42);
      transition: background-color 0.2s;
      &:hover {
        background-color: var(--vscode-button-hover, #1177bb);
      }
    }
  `]
})
export class AboutMeComponent {}

