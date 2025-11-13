// src/api.ts
export async function getHelloMessage() {
  const res = await fetch('/api/hello');
  return res.json();
}
