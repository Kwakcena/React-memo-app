export async function postMemo({ title, body }) {
  const url = 'http://localhost:3001/memo';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  });
  await response.json();
}

export function xxx() {
  // TODO.
}
