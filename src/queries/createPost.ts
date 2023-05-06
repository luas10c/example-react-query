export async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "....",
      body: "...",
      userId: 1,
    }),
  });
  const data = await response.json();

  return data;
}
