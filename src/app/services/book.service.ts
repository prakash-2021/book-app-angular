import { Injectable, signal } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books = signal<Book[]>([
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '978-0-7432-7356-5',
      description: 'A classic American novel set in the Jazz Age.',
      cover: 'https://picsum.photos/201/300',
      pages: 180,
      year: 1925,
      rating: 4.5,
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      isbn: '978-0-06-112008-4',
      description: 'A gripping tale of racial injustice and childhood innocence.',
      cover: 'https://picsum.photos/202/300',
      pages: 324,
      year: 1960,
      rating: 4.8,
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      isbn: '978-0-452-26423-5',
      description: 'A dystopian novel about totalitarianism and surveillance.',
      cover: 'https://picsum.photos/203/300',
      pages: 328,
      year: 1949,
      rating: 4.6,
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      isbn: '978-0-14-043793-1',
      description: 'A romantic novel of manners set in Regency England.',
      cover: 'https://picsum.photos/204/300',
      pages: 288,
      year: 1813,
      rating: 4.7,
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      isbn: '978-0-316-76948-0',
      description: 'A story of teenage rebellion and alienation in New York City.',
      cover: 'https://picsum.photos/200/300',
      pages: 277,
      year: 1951,
      rating: 4.3,
    },
  ]);

  selectedBook = signal<Book | null>(null);

  constructor() {}

  addBook(book: Omit<Book, 'id'>): void {
    const newId = Math.max(...this.books().map((b) => b.id), 0) + 1;
    const newBook: Book = { ...book, id: newId };
    this.books.update((books) => [...books, newBook]);
  }

  updateBook(id: number, updates: Partial<Book>): void {
    this.books.update((books) =>
      books.map((book) => (book.id === id ? { ...book, ...updates } : book))
    );
  }

  deleteBook(id: number): void {
    this.books.update((books) => books.filter((book) => book.id !== id));
    if (this.selectedBook()?.id === id) {
      this.selectedBook.set(null);
    }
  }

  selectBook(book: Book | null): void {
    this.selectedBook.set(book);
  }

  getBookById(id: number): Book | undefined {
    return this.books().find((book) => book.id === id);
  }

  searchBooks(query: string): Book[] {
    const lowerQuery = query.toLowerCase();
    return this.books().filter(
      (book) =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery)
    );
  }
}
