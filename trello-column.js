class TrelloColumn extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.root.innerHTML = `
      <style>
        .container {
          background-color: #ebecf0;
          padding: 8px;
          border-radius: 4px;
        }

        .title {
          padding: 8px;
          font-weight: bold;
        }

        .card-list {
          display: flex;
          flex-direction: column;
        }

        .card-list > trello-card {
          margin: 8px 0;
        }
      </style>

      <div class="container">
        <div slot="title" class="title">Title</div>
        <div class="card-list">
        </div>
      </div>
    `;
  }

  set title(title) {
    const titleEl = this.root.querySelector('[slot=title]');
    titleEl.innerHTML = title;
  }

  set cards(cards) {
    const column = this.root.querySelector('.card-list');
    cards.forEach(card => {
      const cardEl = document.createElement('trello-card');
      cardEl.title = card.title;
      column.appendChild(cardEl);
    });
  }
}

customElements.define('trello-column', TrelloColumn);
