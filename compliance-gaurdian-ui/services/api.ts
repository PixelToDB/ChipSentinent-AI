export const analyzeNews = async () => {
  const res = await fetch("http://localhost:5000/mock-analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      news: "China restricts Gallium exports to US",
    }),
  });

  return res.json();
};