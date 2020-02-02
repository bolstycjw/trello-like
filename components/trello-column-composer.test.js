import './trello-column-composer.js';

test('renders', () => {
  const columnComposer = document.createElement('trello-column-composer');
  document.body.appendChild(columnComposer);

  expect(
    document
      .querySelector('trello-column-composer')
      .shadowRoot.querySelector('.composer'),
  ).toBeInstanceOf(HTMLElement);
});
