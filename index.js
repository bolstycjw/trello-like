import './components/trello-board.js';
import './components/trello-column.js';
import './components/trello-card.js';
import './components/trello-button.js';
import './components/trello-column-composer.js';
import './components/trello-card-composer.js';

const main = document.querySelector('main');
const board = document.createElement('trello-board');
main.appendChild(board);
