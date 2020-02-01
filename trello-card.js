class TrelloCard extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'description'];
  }

  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.root.innerHTML = `
      <style>
        .container {
          background-color: #fff;
          padding: 8px;
          border-radius: 4px;
          box-shadow: 0 1px 0 rgba(9,30,66,.25);
          cursor: pointer;
        }

        .container:hover {
          background-color: #f4f5f7;
        }

        slot[name=description] {
          display: none;
        }

        slot[name=description][open]{
          display: block;
        }
      </style>
      <div class="container">
        <div class="title">
          <slot name="title">Title</slot>
        </div>
        <div class="description">
          <slot name="description"></slot>
        </div>
      </div>
    `;

    this.root.addEventListener('click', this.toggleDescription);
  }

  set title(title) {
    this.setAttribute('title', title);
  }

  set description(description) {
    this.setAttribute('description', description);
  }

  toggleDescription = () => {
    const descriptionEl = this.root.querySelector('slot[name=description]');
    console.log(descriptionEl);
    const open = descriptionEl.getAttribute('open');
    if (open) {
      descriptionEl.removeAttribute('open');
    } else {
      descriptionEl.setAttribute('open', true);
    }
  };

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const titleEl = this.root.querySelector('slot[name=title]');
    titleEl.innerHTML = this.getAttribute('title');
    const descriptionEl = this.root.querySelector('slot[name=description]');
    descriptionEl.innerHTML = this.getAttribute('description');
  }
}

customElements.define('trello-card', TrelloCard);
