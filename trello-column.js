class TrelloColumn extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.root.innerHTML = `
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
          margin-bottom: 8px;
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
  }

  set title(title) {
    this.setAttribute('title', title);
  }

  set cards(cards) {
    const column = this.root.querySelector('.card-list');
    cards.forEach(card => {
      const cardEl = document.createElement('trello-card');
      cardEl.title = card.title;
      cardEl.description = card.description;
      column.appendChild(cardEl);
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const titleEl = this.root.querySelector('slot[name=title]');
    titleEl.innerHTML = this.getAttribute('title');
  }
}

customElements.define('trello-column', TrelloColumn);
