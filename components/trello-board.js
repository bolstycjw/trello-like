import { fetchColumns, postColumn } from '../apis.js';

class TrelloBoard extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        .container {
          background-color: #844;
          display: flex;
          height: 100vh;
          width: 100vw;

        }

        .container > trello-column, trello-column-composer { margin: 8px;
        }
      </style>

      <div class="container">
      </div>
    `;
    shadowRoot.addEventListener('column-added', this.addColumn);
  }

  addColumn = async e => {
    const title = e.detail;
    const id = this.getAttribute('id');
    const data = {
      title,
    };
    const res = await postColumn(data);
    this.columns = await fetchColumns();
    this.render();
  };

  async connectedCallback() {
    this.columns = await fetchColumns();
    this.render();
  }

  render() {
    const board = this.shadowRoot.querySelector('.container');
    board.innerHTML = '';
    this.columns.forEach(column => {
      const cardEl = document.createElement('trello-column');
      cardEl.id = column.id;
      cardEl.title = column.title;
      cardEl.cards = column.cards;

      board.appendChild(cardEl);
    });
    board.appendChild(document.createElement('trello-column-composer'));
  }
}

customElements.define('trello-board', TrelloBoard);
