class TrelloButton extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.root.innerHTML = `
      <style>
        .container {
          display: inline-block;
          background-color: #5aac44;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          color: #fff;
        }

        .container:hover {
          background-color: #61bd4f;
        }

        .container:active {
          background-color: #49852e;
        }
      </style>
      <div class="container">
        <span><slot></slot></span>
      </div>
    `;
  }
}

customElements.define('trello-button', TrelloButton);
