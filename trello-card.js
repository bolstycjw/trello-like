class TrelloCard extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        .container {
          background-color: #fff;
          padding: 8px;
          border-radius: 4px;
          box-shadow: 0 1px 0 rgba(9,30,66,.25);
        }
      </style>
      <div class="container">
        <div slot="title" class="title">Title</div>
      </div>
    `;
  }

  set title(title) {
    const titleEl = this.shadowRoot.querySelector('[slot=title]');
    titleEl.innerHTML = title;
  }
}

customElements.define('trello-card', TrelloCard);
