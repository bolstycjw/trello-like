import { fetchCards, postCard } from '../apis.js';

class TrelloColumn extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        :host {
          width: 272px;
        }

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
          margin-bottom: 4px;
        }

        .card-list > trello-card {
          margin: 4px 0;
        }
      </style>

      <div class="container">
        <div class="title"><slot name="title">Title</slot></div>
        <div class="card-list"></div>
        <trello-card-composer></trello-card-composer>
      </div>
    `;

    shadowRoot.addEventListener('card-added', this.addCard);
  }

  set id(id) {
    this.setAttribute('id', id);
  }

  set title(title) {
    this.setAttribute('title', title);
  }

  set cards(cards) {
    const column = this.shadowRoot.querySelector('.card-list');
    column.innerHTML = '';
    cards.forEach(card => {
      const cardEl = document.createElement('trello-card');
      cardEl.title = card.title;
      cardEl.description = card.description;
      column.appendChild(cardEl);
    });
  }

  addCard = async e => {
    const title = e.detail;
    const id = this.getAttribute('id');
    const data = {
      title,
      columnId: parseInt(id),
    };
    const res = await postCard(data);
    const cards = await fetchCards(id);
    this.cards = cards;
  };

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const titleEl = this.shadowRoot.querySelector('slot[name=title]');
    titleEl.innerHTML = this.getAttribute('title');
  }
}

customElements.define('trello-column', TrelloColumn);
