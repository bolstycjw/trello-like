import './trello-button.js';

test('renders', () => {
  const button = document.createElement('trello-button');
  document.body.appendChild(button);

  expect(
    document
      .querySelector('trello-button')
      .shadowRoot.querySelector('.container'),
  ).toBeInstanceOf(HTMLElement);
});
