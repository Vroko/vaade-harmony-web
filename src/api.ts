export async function fetchShare(shareId: string) {
  const res = await fetch(`https://api.vaade.co/share/${shareId}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
