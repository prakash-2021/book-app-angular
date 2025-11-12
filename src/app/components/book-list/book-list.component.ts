import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule, BookDetailComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  searchQuery = '';
  displayedBooks: Book[] = [];

  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.displayedBooks = this.bookService.books();
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.displayedBooks = this.bookService.searchBooks(this.searchQuery);
    } else {
      this.displayedBooks = this.bookService.books();
    }
  }

  selectBook(book: Book): void {
    this.bookService.selectBook(book);
  }

  deleteBook(book: Book): void {
    if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
      this.bookService.deleteBook(book.id);
      this.displayedBooks = this.bookService.books();
    }
  }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating))
      .fill(0)
      .map((_, i) => i);
  }
}
