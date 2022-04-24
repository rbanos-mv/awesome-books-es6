import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';
import BookCollection from './BookCollection.js';

class UI {
  static #bookListElement = document.querySelector('.bookList');

  static #bookElement = document.querySelector('.book');

  static #titleElement = document.querySelector('#title');

  static #authorElement = document.querySelector('#author');

  static #bookListMenu = document.querySelector('#bookList');

  static #bookFormMenu = document.querySelector('#bookForm');

  static #contactMenu = document.querySelector('#contact');

  static #dateElement = document.querySelector('.date');

  static displayDate = () => {
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    const dateText = now;
    UI.#dateElement.innerHTML = dateText;

    setTimeout(() => {
      UI.displayDate();
    }, 500);
  };

  static displayBook = (book) => {
    const card = UI.#bookElement.cloneNode(true);
    card.querySelector('#title-author').textContent = book.toString();
    const removeBtnElement = card.querySelector('button');
    removeBtnElement.value = book.id;
    removeBtnElement.onclick = UI.removeBook;
    this.#bookListElement.appendChild(card);
  };

  static removeBook = (event) => {
    const removeBtnElement = event.target;
    BookCollection.remove(removeBtnElement.value);
    const cardElement = removeBtnElement.parentElement;
    cardElement.remove();
  };

  static displayBooks = () => {
    const books = BookCollection.getBooks();
    books.forEach((book) => this.displayBook(book));
  };

  static addNewBook = (event) => {
    const title = UI.#titleElement.value.trim();
    const author = UI.#authorElement.value.trim();

    if (title === '' || author === '') {
      event.preventDefault();
    } else {
      const book = BookCollection.addBook(title, author);
      UI.displayBook(book);
      UI.#titleElement.value = '';
      UI.#authorElement.value = '';
    }
  };

  static showSection = (event) => {
    const { id } = event.target;
    if (id !== '') {
      UI.#bookListMenu.classList.toggle('hidden', id !== 'goList');
      UI.#bookFormMenu.classList.toggle('hidden', id !== 'goForm');
      UI.#contactMenu.classList.toggle('hidden', id !== 'goCont');
    }
  };
}

export default UI;
