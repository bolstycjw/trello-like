import './trello-board.js';
import './trello-column.js';
import './trello-card.js';

const main = document.querySelector('main');
const board = document.createElement('trello-board');
main.appendChild(board);
