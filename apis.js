export async function fetchColumns() {
  const res = await fetch('http://localhost:3000/columns?_embed=cards');
  const columns = await res.json();
  return columns;
}

export async function postColumn(data) {
  const res = await fetch('http://localhost:3000/columns', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res;
}

export async function fetchCards(id) {
  const res = await fetch(`http://localhost:3000/columns/${id}/cards`);
  const cards = await res.json();
  return cards;
}

export async function postCard(data) {
  const res = await fetch('http://localhost:3000/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res;
}
