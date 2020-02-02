import './trello-board.js';
import { fetchColumns } from '../apis.js';

jest.mock('../apis.js');

test('renders', () => {
  fetchColumns.mockResolvedValue([]);

  const board = document.createElement('trello-board');
  document.body.appendChild(board);

  expect(
    document
      .querySelector('trello-board')
      .shadowRoot.querySelector('.container'),
  ).toBeInstanceOf(HTMLElement);
});
