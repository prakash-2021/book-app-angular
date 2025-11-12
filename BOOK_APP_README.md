# 📚 Book Library App

A modern Angular application for browsing, searching, and managing a collection of books.

## Features

### 📖 Book Management

- **Browse Books**: View a beautiful grid of books with cover images, ratings, and publication year
- **Search Functionality**: Search books by title or author in real-time
- **Book Details**: Click on any book to view detailed information including:
  - Full title and author
  - ISBN number
  - Publication year
  - Number of pages
  - Rating (out of 5 stars)
  - Book description
- **Delete Books**: Remove books from your collection
- **Add to Library**: Quick-add button for adding books to your personal library

### 🎨 User Interface

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Styling**: Clean and intuitive interface with smooth animations
- **Star Ratings**: Visual star rating display
- **Book Cards**: Hover effects and smooth transitions for better UX
- **Modal Details**: Detailed view in an elegant modal popup

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/              # App header component
│   │   ├── book-list/           # Main book listing component
│   │   └── book-detail/         # Book details modal component
│   ├── services/
│   │   └── book.service.ts      # Book management service
│   ├── models/
│   │   └── book.model.ts        # Book interface definition
│   ├── app.ts                   # Root component
│   └── app.html                 # Root template
├── styles.scss                   # Global styles
└── index.html                    # Main HTML file
```

## Technologies Used

- **Angular 20**: Latest Angular framework with standalone components
- **TypeScript**: For type-safe development
- **SCSS**: For advanced styling
- **RxJS Signals**: Modern reactive state management
- **Angular Forms**: Form handling with ngModel

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd book-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to:

```
http://localhost:4200
```

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run unit tests
- `npm watch` - Build in watch mode

## Core Components

### HeaderComponent

Displays the app title and subtitle with a beautiful gradient background.

### BookListComponent

Main component that:

- Displays books in a responsive grid
- Handles search functionality
- Manages book selection and deletion
- Shows star ratings

### BookDetailComponent

Modal component for viewing detailed book information with actions.

## Service: BookService

Manages all book operations:

- `books` - Signal containing all books
- `selectedBook` - Signal for the currently selected book
- `addBook()` - Add a new book
- `updateBook()` - Update book information
- `deleteBook()` - Delete a book
- `selectBook()` - Select a book for viewing details
- `searchBooks()` - Search books by title or author

## Sample Data

The app comes pre-loaded with 5 classic books:

1. The Great Gatsby - F. Scott Fitzgerald
2. To Kill a Mockingbird - Harper Lee
3. 1984 - George Orwell
4. Pride and Prejudice - Jane Austen
5. The Catcher in the Rye - J.D. Salinger

## Future Enhancements

- Add new books with a form
- Edit existing book information
- Sort and filter options
- User authentication
- Local storage persistence
- Backend API integration
- Book recommendations
- User reviews and ratings
- Reading progress tracking

## Styling

The app uses SCSS for styling with:

- Custom color scheme (Navy and warm accents)
- Responsive grid layouts
- Smooth animations and transitions
- Accessible color contrasts
- Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Created with Angular 20 and TypeScript
