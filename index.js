import './trello-board.js';
import './trello-column.js';
import './trello-card.js';
import './trello-button.js';
import './trello-column-composer.js';
import './trello-card-composer.js';

const main = document.querySelector('main');
const board = document.createElement('trello-board');
main.appendChild(board);
