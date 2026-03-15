export default async function handler(req, res) {
  const { id } = req.query;

  const url = `https://api.semanticscholar.org/graph/v1/paper/${id}?fields=title,abstract,year,authors`;

  const response = await fetch(url);
  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
