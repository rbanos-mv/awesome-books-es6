import Book from './Book';

class Store {
  static #idKey = 'idKey';

  static #booksKey = 'books';

  static getBooks = () => {
    const bookList = JSON.parse(localStorage.getItem(Store.#booksKey) || '[]');
    return bookList.map((book) => Book.create(book));
  };

  static setBooks = (books) => localStorage.setItem(Store.#booksKey, JSON.stringify(books));

  static nextId = () => {
    const id = parseInt(localStorage.getItem(Store.#idKey) || '0', 10) + 1;
    localStorage.setItem(Store.#idKey, id);
    return id.toString();
  };
}

export default Store;
