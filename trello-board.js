async function fetchColumns() {
  const res = await fetch('http://localhost:3000/columns?_embed=cards');
  const columns = await res.json();
  return columns;
}

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

        .container > trello-column {
          margin: 32px;
        }
      </style>

      <div class="container">
      </div>
    `;
  }

  async connectedCallback() {
    const columns = await fetchColumns();
    const board = this.shadowRoot.querySelector('.container');
    columns.forEach(column => {
      const cardEl = document.createElement('trello-column');
      cardEl.id = column.id;
      cardEl.title = column.title;
      cardEl.cards = column.cards;

      board.appendChild(cardEl);
    });
  }
}

customElements.define('trello-board', TrelloBoard);
