import UI from './modules/UI.js';

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#addButton').onclick = UI.addNewBook;
  document.querySelector('.menuList').onclick = UI.showSection;
  UI.displayBooks();
  UI.displayDate();
});
