async function fetchColumns() {
  const res = await fetch('http://localhost:3000/columns?_embed=cards');
  const columns = await res.json();
  return columns;
}

class TrelloBoard extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.root.innerHTML = `
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
    const board = this.root.querySelector('.container');
    columns.forEach(column => {
      const el = document.createElement('trello-column');
      el.title = column.title;
      el.cards = column.cards;

      board.appendChild(el);
    });
  }
}

customElements.define('trello-board', TrelloBoard);
