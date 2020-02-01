class TrelloButton extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.root.innerHTML = `
      <style>
        :host {
          display: inline-block;
          background-color: #5aac44;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          color: #fff;
        }
      </style>
      <span><slot></slot></span>
    `;
  }
}

customElements.define('trello-button', TrelloButton);
