class TrelloColumnComposer extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          border-radius: 4px;
          cursor: pointer;
          color: #5e6c84;
        }

        .add-another-column {
          display: none;
          border-radius: 4px;
          padding: 4px 8px;
        }

        .add-another-column:hover {
          background-color: rgba(9,30,66,.08);
          color: #172b4d;
        }

        .form {
          display: none;
        }

        textarea {
          box-sizing: border-box;
          overflow: hidden;
          overflow-wrap: break-word;
          resize: none;
          height: 54px;
          border: none;
          border-radius: 4px;
          box-shadow: 0 1px 0 rgba(9,30,66,.25);
          margin-bottom: 4px;
          max-height: 162px;
          min-height: 54px;
          width: 100%;
          padding: 8px;
        }

        .composer[hide] > .add-another-column {
          display: block;
        }

        .composer:not([hide]) > .form {
          display: block;
        }
      </style>
      <div class="composer" hide>
        <div class="add-another-column">+ Add another column</div>
        <div class="form">
          <textarea placeholder="Enter a title for this column…"></textarea>
          <trello-button>Add Column</trello-button>
        </div>
      </div>
    `;
    const composerEl = shadowRoot.querySelector('.composer');

    const addAnotherColumnEl = composerEl.querySelector('.add-another-column');
    addAnotherColumnEl.addEventListener('click', () => {
      composerEl.removeAttribute('hide');
      const textAreaEl = composerEl.querySelector('textarea');
      textAreaEl.focus();
    });

    const addColumnEl = composerEl.querySelector('trello-button');
    addColumnEl.addEventListener('click', () => {
      const textAreaEl = this.shadowRoot.querySelector('textarea');
      const title = textAreaEl.value;
      this.dispatchEvent(
        new CustomEvent('column-added', { bubbles: true, detail: title }),
      );
      composerEl.setAttribute('hide', true);
    });
  }
}

customElements.define('trello-column-composer', TrelloColumnComposer);
