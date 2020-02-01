class TrelloCardComposer extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.root.innerHTML = `
      <style>
        :host {
          display: block;
          border-radius: 4px;
          cursor: pointer;
          color: #5e6c84;
        }

        .add-another-card {
          border-radius: 4px;
          padding: 4px 8px;
        }

        .add-another-card:hover {
          background-color: rgba(9,30,66,.08);
          color: #172b4d;
        }
      </style>
      <div class="add-another-card">+ Add another card</div>
    `;
  }
}

customElements.define('trello-card-composer', TrelloCardComposer);
