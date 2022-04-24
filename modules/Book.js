class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  toString = () => `"${this.title}" by ${this.author}`;
}

export default Book;
