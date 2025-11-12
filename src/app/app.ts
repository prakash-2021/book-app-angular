import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BookListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
