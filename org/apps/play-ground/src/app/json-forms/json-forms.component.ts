import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-json-forms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="json-forms-container">
      <h1>JSON Forms</h1>
      <p>This is the JSON Forms page in the Playground micro frontend.</p>
      <p>You can experiment with JSON forms, validations, and form builders here.</p>
      <nav>
        <a routerLink="/playground">Back to Playground</a>
      </nav>
    </div>
  `,
  styles: [`
    .json-forms-container {
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
export class JsonFormsComponent {}

