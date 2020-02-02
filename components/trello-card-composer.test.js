import './trello-card-composer.js';

test('renders', () => {
  const cardComposer = document.createElement('trello-card-composer');
  document.body.appendChild(cardComposer);

  expect(
    document
      .querySelector('trello-card-composer')
      .shadowRoot.querySelector('.composer'),
  ).toBeInstanceOf(HTMLElement);
});
