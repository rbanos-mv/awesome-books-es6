import Book from './Book.js';
import Store from './Store.js';

class BookCollection {
  static getBooks = () => Store.getBooks();

  static add = (book) => {
    const books = Store.getBooks();
    books.push(book);
    Store.setBooks(books);
    return book;
  };

  static addBook = (title, author) => {
    const id = Store.nextId();
    const newBook = new Book(id, title, author);
    return BookCollection.add(newBook);
  };

  static remove = (id) => {
    const books = BookCollection.getBooks();
    Store.setBooks(books.filter((book) => book.id !== id));
  };
}

export default BookCollection;
