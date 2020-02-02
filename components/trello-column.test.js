import './trello-column.js';
import { fetchColumns } from '../apis.js';

jest.mock('../apis.js');

test('renders', () => {
  const column = document.createElement('trello-column');
  document.body.appendChild(column);

  fetchColumns.mockResolvedValue([]);

  expect(
    document
      .querySelector('trello-column')
      .shadowRoot.querySelector('.container'),
  ).toBeInstanceOf(HTMLElement);
});
