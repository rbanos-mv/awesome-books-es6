import Book from './Book.js';

class Store {
  static #idKey = 'idKey';

  static #booksKey = 'books';

  static getBooks = () => {
    const bookList = JSON.parse(localStorage.getItem(Store.#booksKey) || '[]');
    return bookList.map((book) => new Book(book.id, book.title, book.author));
  };

  static setBooks = (books) => localStorage.setItem(Store.#booksKey, JSON.stringify(books));

  static nextId = () => {
    const id = parseInt(localStorage.getItem(Store.#idKey) || '0', 10) + 1;
    localStorage.setItem(Store.#idKey, id);
    return id.toString();
  };
}

export default Store;
