import './trello-card.js';

test('renders', () => {
  const card = document.createElement('trello-card');
  document.body.appendChild(card);

  expect(
    document
      .querySelector('trello-card')
      .shadowRoot.querySelector('.container'),
  ).toBeInstanceOf(HTMLElement);
});
