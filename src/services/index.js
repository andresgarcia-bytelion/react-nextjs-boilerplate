export const POST = (data) => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: data,
});

export const PUT = (data) => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'PUT',
  body: data,
});
