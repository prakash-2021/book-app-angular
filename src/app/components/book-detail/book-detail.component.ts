import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent {
  @Input() book!: Book;

  constructor(public bookService: BookService) {}

  closeDetail(): void {
    this.bookService.selectBook(null);
  }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating))
      .fill(0)
      .map((_, i) => i);
  }
}
